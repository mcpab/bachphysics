import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

type UnknownRecord = Record<string, unknown>;

type ValidationFailure = {
  filePath: string;
  figureId: string;
  figureSource: string;
  missingProperties: string[];
};

type ImageDimensions = {
  width: number;
  height: number;
};

const projectRoot = process.cwd();
const libraryRoot = path.join(projectRoot, "library");
const publicImageRoot = path.join(projectRoot, "public", "img");

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null;
}

function findGeneratedFiles(
  directoryPath: string,
  fileSuffix: string,
): string[] {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });
  const matchingFiles: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      matchingFiles.push(...findGeneratedFiles(entryPath, fileSuffix));
    } else if (entry.isFile() && entry.name.endsWith(fileSuffix)) {
      matchingFiles.push(entryPath);
    }
  }

  return matchingFiles;
}

function findMissingDimensionProperties(figure: UnknownRecord): string[] {
  const missingProperties: string[] = [];

  if (typeof figure.width !== "number" || figure.width <= 0) {
    missingProperties.push("width");
  }

  if (typeof figure.height !== "number" || figure.height <= 0) {
    missingProperties.push("height");
  }

  return missingProperties;
}

function readPngDimensions(image: Buffer): ImageDimensions | undefined {
  const pngSignature = "89504e470d0a1a0a";

  if (image.length < 24 || image.subarray(0, 8).toString("hex") !== pngSignature) {
    return undefined;
  }

  return {
    width: image.readUInt32BE(16),
    height: image.readUInt32BE(20),
  };
}

function readJpegDimensions(image: Buffer): ImageDimensions | undefined {
  if (image.length < 4 || image[0] !== 0xff || image[1] !== 0xd8) {
    return undefined;
  }

  const startOfFrameMarkers = new Set([
    0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7,
    0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf,
  ]);
  let offset = 2;

  while (offset + 8 < image.length) {
    if (image[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = image[offset + 1];
    offset += 2;

    if (marker === 0xd8 || marker === 0xd9 || marker === 0x01) {
      continue;
    }

    if (marker >= 0xd0 && marker <= 0xd7) {
      continue;
    }

    if (offset + 2 > image.length) {
      return undefined;
    }

    const segmentLength = image.readUInt16BE(offset);

    if (startOfFrameMarkers.has(marker) && offset + 7 < image.length) {
      return {
        width: image.readUInt16BE(offset + 5),
        height: image.readUInt16BE(offset + 3),
      };
    }

    if (segmentLength < 2) {
      return undefined;
    }

    offset += segmentLength;
  }

  return undefined;
}

function readImageDimensions(figureSource: string): ImageDimensions | undefined {
  const imagePath = path.resolve(publicImageRoot, figureSource);
  const relativeImagePath = path.relative(publicImageRoot, imagePath);

  // Figure sources must remain inside the public image directory.
  if (relativeImagePath.startsWith("..") || path.isAbsolute(relativeImagePath)) {
    return undefined;
  }

  if (!fs.existsSync(imagePath)) {
    return undefined;
  }

  const image = fs.readFileSync(imagePath);
  return readPngDimensions(image) ?? readJpegDimensions(image);
}

function validateFigure(
  value: UnknownRecord,
  filePath: string,
  failures: ValidationFailure[],
): void {
  const missingProperties = findMissingDimensionProperties(value);

  if (missingProperties.length === 0) {
    return;
  }

  failures.push({
    filePath,
    figureId: typeof value.id === "string" ? value.id : "unknown figure",
    figureSource: typeof value.src === "string" ? value.src : "unknown source",
    missingProperties,
  });
}

function validateAstValue(
  value: unknown,
  filePath: string,
  failures: ValidationFailure[],
): void {
  if (Array.isArray(value)) {
    for (const child of value) {
      validateAstValue(child, filePath, failures);
    }
    return;
  }

  if (!isRecord(value)) {
    return;
  }

  if (value.type === "figure") {
    validateFigure(value, filePath, failures);
  }

  for (const child of Object.values(value)) {
    validateAstValue(child, filePath, failures);
  }
}

function validateLabelIndex(
  value: unknown,
  filePath: string,
  failures: ValidationFailure[],
): void {
  if (!isRecord(value)) {
    throw new Error(`Expected labelIndex export in ${filePath}`);
  }

  for (const entry of Object.values(value)) {
    if (
      isRecord(entry) &&
      entry.nodeType === "figure" &&
      isRecord(entry.previewProps)
    ) {
      validateFigure(entry.previewProps, filePath, failures);
    }
  }
}

async function main(): Promise<void> {
  if (!fs.existsSync(libraryRoot)) {
    throw new Error(`Could not find library directory at ${libraryRoot}`);
  }

  const failures: ValidationFailure[] = [];
  const astFiles = findGeneratedFiles(libraryRoot, ".layout.ast.ts");
  const labelIndexFiles = findGeneratedFiles(libraryRoot, ".labelIndex.ts");

  for (const filePath of astFiles) {
    const module = (await import(pathToFileURL(filePath).href)) as {
      latexDocument?: unknown;
    };

    if (module.latexDocument === undefined) {
      throw new Error(`Expected latexDocument export in ${filePath}`);
    }

    validateAstValue(module.latexDocument, filePath, failures);
  }

  for (const filePath of labelIndexFiles) {
    const module = (await import(pathToFileURL(filePath).href)) as {
      labelIndex?: unknown;
    };

    validateLabelIndex(module.labelIndex, filePath, failures);
  }

  if (failures.length > 0) {
    console.error("Figures used with Next Image require positive width and height:");

    for (const failure of failures) {
      const suggestedDimensions = readImageDimensions(failure.figureSource);

      console.error(
        `  ${path.relative(projectRoot, failure.filePath)}: ${failure.figureId} (${failure.figureSource}) is missing ${failure.missingProperties.join(" and ")}`,
      );

      if (suggestedDimensions) {
        console.error(
          `    Suggested properties: width: ${suggestedDimensions.width}, height: ${suggestedDimensions.height},`,
        );
      } else {
        console.error("    Could not read dimensions from the source image.");
      }
    }

    process.exitCode = 1;
    return;
  }

  console.log(
    `Validated figure dimensions in ${astFiles.length} AST files and ${labelIndexFiles.length} label-index files.`,
  );
}

await main();
