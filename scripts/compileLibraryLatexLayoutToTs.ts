import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

import { readImageDimensions } from "./lib/readImageDimensions.ts";

type ResolvedLatexDocument = {
  inputPath: string;
  documentId: string;
  relativeSourcePath: string;
};

type FigureDimensions = {
  width: number;
  height: number;
};

const projectRoot = process.cwd();
const libraryRoot = path.join(projectRoot, "library");
const generatedRoot = path.join(libraryRoot, "generated");

function usage(): string {
  return [
    "Usage: pnpm latex:layout:ts <document-slug-or-library-path>",
    "",
    "Examples:",
    "  pnpm latex:layout:ts time-and-space",
    "  pnpm latex:layout:ts library/relativity/special-relativity/time-and-space/source/time-and-space",
  ].join("\n");
}

function assertLibraryExists(): void {
  if (!fs.existsSync(libraryRoot)) {
    console.error(`Could not find library directory at ${libraryRoot}`);
    process.exit(1);
  }
}

function isTexFile(filePath: string): boolean {
  return path.extname(filePath) === ".tex";
}

function findTexFiles(directoryPath: string): string[] {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      // Generated artifacts are compiler output, not source documents.
      if (path.resolve(entryPath) === path.resolve(generatedRoot)) {
        continue;
      }
      files.push(...findTexFiles(entryPath));
    } else if (entry.isFile() && isTexFile(entryPath)) {
      files.push(entryPath);
    }
  }

  return files;
}

function resolvePathInput(inputArg: string): ResolvedLatexDocument {
  const inputPathWithoutExtension = path.resolve(projectRoot, inputArg);
  const inputPath = path.extname(inputPathWithoutExtension)
    ? inputPathWithoutExtension
    : `${inputPathWithoutExtension}.tex`;

  if (!fs.existsSync(inputPath)) {
    console.error(`Could not find LaTeX source at ${inputPath}`);
    process.exit(1);
  }

  const relativeSourcePath = path.relative(libraryRoot, inputPath);
  if (relativeSourcePath.startsWith("..") || path.isAbsolute(relativeSourcePath)) {
    console.error("Path inputs must point to a .tex file inside library/.");
    process.exit(1);
  }

  return {
    inputPath,
    documentId: path.parse(inputPath).name,
    relativeSourcePath,
  };
}

function resolveSlugInput(inputArg: string): ResolvedLatexDocument {
  const expectedFileName = `${inputArg}.tex`;
  const matches = findTexFiles(libraryRoot).filter(
    (filePath) => path.basename(filePath) === expectedFileName,
  );

  if (matches.length === 0) {
    console.error(`Could not find library document ${expectedFileName}`);
    process.exit(1);
  }

  if (matches.length > 1) {
    console.error(`Found more than one library document named ${expectedFileName}:`);
    for (const match of matches) {
      console.error(`  ${path.relative(projectRoot, match)}`);
    }
    console.error("Use a library path instead of a bare slug.");
    process.exit(1);
  }

  const inputPath = matches[0];

  return {
    inputPath,
    documentId: inputArg,
    relativeSourcePath: path.relative(libraryRoot, inputPath),
  };
}

function resolveLatexDocument(inputArg: string): ResolvedLatexDocument {
  if (inputArg.includes("/") || inputArg.includes("\\") || path.extname(inputArg)) {
    return resolvePathInput(inputArg);
  }

  return resolveSlugInput(inputArg);
}

function resolveKatexCompilerPath(): string {
  const compilerPath = path.join(
    projectRoot,
    "node_modules",
    ".bin",
    process.platform === "win32"
      ? "mcpab-katex-compile.cmd"
      : "mcpab-katex-compile",
  );

  if (!fs.existsSync(compilerPath)) {
    console.error(
      "Could not find the @mcpab/katex compiler. Run pnpm install first.",
    );
    process.exit(1);
  }

  return compilerPath;
}

function resolveFigureDimensions(
  assetsDirectory: string,
  figureSource: string,
): FigureDimensions {
  const assetPath = path.resolve(assetsDirectory, figureSource);
  const relativeAssetPath = path.relative(assetsDirectory, assetPath);

  // Generated figure paths must not be able to escape their essay's asset directory.
  if (relativeAssetPath.startsWith("..") || path.isAbsolute(relativeAssetPath)) {
    throw new Error(`Figure source points outside the asset directory: ${figureSource}`);
  }

  const dimensions = readImageDimensions(assetPath);
  if (!dimensions) {
    throw new Error(
      `Could not read dimensions for figure ${figureSource} at ${assetPath}`,
    );
  }

  return dimensions;
}

function addFigureDimensionsToLayout(
  outputPath: string,
  assetsDirectory: string,
): void {
  const moduleSource = fs.readFileSync(outputPath, "utf8");
  const figureSourcePattern = /^(\s*)type: "figure",\n(\s*)src: ("(?:[^"\\]|\\.)*"),$/gm;
  let figureCount = 0;

  const moduleSourceWithDimensions = moduleSource.replace(
    figureSourcePattern,
    (figureProperties, _typeIndent: string, propertyIndent: string, sourceLiteral: string) => {
      figureCount += 1;
      const figureSource = JSON.parse(sourceLiteral) as string;
      const dimensions = resolveFigureDimensions(assetsDirectory, figureSource);

      return [
        figureProperties,
        `${propertyIndent}width: ${dimensions.width},`,
        `${propertyIndent}height: ${dimensions.height},`,
      ].join("\n");
    },
  );

  if (figureCount > 0) {
    fs.writeFileSync(outputPath, moduleSourceWithDimensions);
    console.log(`Added intrinsic dimensions to ${figureCount} figure(s).`);
  }
}

function addFigureDimensionsToLabelIndex(
  outputPath: string,
  assetsDirectory: string,
): void {
  const moduleSource = fs.readFileSync(outputPath, "utf8");
  const figurePreviewSourcePattern = /^(\s*)nodeType: "figure",\n\1previewProps: \{\n(\s*)id: "(?:[^"\\]|\\.)*",\n(\s*)src: ("(?:[^"\\]|\\.)*"),$/gm;
  let figureCount = 0;

  const moduleSourceWithDimensions = moduleSource.replace(
    figurePreviewSourcePattern,
    (
      figureProperties,
      _entryIndent: string,
      _idPropertyIndent: string,
      sourcePropertyIndent: string,
      sourceLiteral: string,
    ) => {
      figureCount += 1;
      const figureSource = JSON.parse(sourceLiteral) as string;
      const dimensions = resolveFigureDimensions(assetsDirectory, figureSource);

      return [
        figureProperties,
        `${sourcePropertyIndent}width: ${dimensions.width},`,
        `${sourcePropertyIndent}height: ${dimensions.height},`,
      ].join("\n");
    },
  );

  if (figureCount > 0) {
    fs.writeFileSync(outputPath, moduleSourceWithDimensions);
    console.log(`Added intrinsic dimensions to ${figureCount} figure preview(s).`);
  }
}

function main(): void {
  const args = process.argv.slice(2).filter((arg) => arg !== "--");
  const inputArg = args[0];

  if (!inputArg) {
    console.error(usage());
    process.exit(1);
  }

  assertLibraryExists();

  const document = resolveLatexDocument(inputArg);
  const sourceDirectory = path.dirname(document.inputPath);
  const outputDirectory = path.basename(sourceDirectory) === "source"
    ? path.join(path.dirname(sourceDirectory), "generated")
    : sourceDirectory;
  const outputBasePath = path.join(
    outputDirectory,
    path.parse(document.inputPath).name,
  );
  const outputLayoutPath = `${outputBasePath}.layout.ast.ts`;
  const outputLabelIndexPath = `${outputBasePath}.labelIndex.ts`;
  const temporaryOutputSuffix = `${process.pid}-${Date.now()}.tmp.ts`;
  const temporaryLayoutPath = `${outputBasePath}.layout.ast.${temporaryOutputSuffix}`;
  const temporaryLabelIndexPath = `${outputBasePath}.labelIndex.${temporaryOutputSuffix}`;

  fs.mkdirSync(path.dirname(outputLayoutPath), { recursive: true });

  const compilerPath = resolveKatexCompilerPath();

  const result = spawnSync(
    compilerPath,
    [
      document.inputPath,
      temporaryLayoutPath,
      document.documentId,
      temporaryLabelIndexPath,
    ],
    {
      cwd: projectRoot,
      stdio: "inherit",
    },
  );

  if (result.error) {
    fs.rmSync(temporaryLayoutPath, { force: true });
    fs.rmSync(temporaryLabelIndexPath, { force: true });
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    fs.rmSync(temporaryLayoutPath, { force: true });
    fs.rmSync(temporaryLabelIndexPath, { force: true });
    process.exit(result.status ?? 1);
  }

  const assetsDirectory = path.join(path.dirname(sourceDirectory), "assets");
  try {
    addFigureDimensionsToLayout(temporaryLayoutPath, assetsDirectory);
    addFigureDimensionsToLabelIndex(temporaryLabelIndexPath, assetsDirectory);

    // Keep the last valid artifacts visible until compilation and figure enrichment finish.
    fs.renameSync(temporaryLabelIndexPath, outputLabelIndexPath);
    fs.renameSync(temporaryLayoutPath, outputLayoutPath);
  } catch (error: unknown) {
    fs.rmSync(temporaryLayoutPath, { force: true });
    fs.rmSync(temporaryLabelIndexPath, { force: true });
    throw error;
  }
}

main();
