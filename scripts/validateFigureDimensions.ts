import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { readImageDimensions as readImageDimensionsFromFile } from "./lib/readImageDimensions.ts";

type UnknownRecord = Record<string, unknown>;

type ValidationFailure = {
  filePath: string;
  figureId: string;
  figureSource: string;
  missingProperties: string[];
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

function readFigureDimensions(figureSource: string) {
  const imagePath = path.resolve(publicImageRoot, figureSource);
  const relativeImagePath = path.relative(publicImageRoot, imagePath);

  // Figure sources must remain inside the public image directory.
  if (relativeImagePath.startsWith("..") || path.isAbsolute(relativeImagePath)) {
    return undefined;
  }

  return readImageDimensionsFromFile(imagePath);
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
    const generatedModule = (await import(pathToFileURL(filePath).href)) as {
      latexDocument?: unknown;
    };

    if (generatedModule.latexDocument === undefined) {
      throw new Error(`Expected latexDocument export in ${filePath}`);
    }

    validateAstValue(generatedModule.latexDocument, filePath, failures);
  }

  for (const filePath of labelIndexFiles) {
    const generatedModule = (await import(pathToFileURL(filePath).href)) as {
      labelIndex?: unknown;
    };

    validateLabelIndex(generatedModule.labelIndex, filePath, failures);
  }

  if (failures.length > 0) {
    console.error("Figures used with Next Image require positive width and height:");

    for (const failure of failures) {
      const suggestedDimensions = readFigureDimensions(failure.figureSource);

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
