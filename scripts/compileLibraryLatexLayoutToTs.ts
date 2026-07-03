import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

type ResolvedLatexDocument = {
  inputPath: string;
  documentId: string;
  relativeSourcePath: string;
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
    "  pnpm latex:layout:ts library/relativity/time-and-space",
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

function resolveKatexPackageRoot(): string {
  const packageLinkPath = path.join(
    projectRoot,
    "node_modules",
    "@mcpab",
    "katex",
  );

  if (!fs.existsSync(packageLinkPath)) {
    console.error("Could not find @mcpab/katex in node_modules.");
    process.exit(1);
  }

  return fs.realpathSync(packageLinkPath);
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
  const outputBasePath = document.inputPath.replace(/\.tex$/, "");
  const outputLayoutPath = `${outputBasePath}.layout.ast.ts`;
  const outputLabelIndexPath = `${outputBasePath}.labelIndex.ts`;

  fs.mkdirSync(path.dirname(outputLayoutPath), { recursive: true });

  const katexPackageRoot = resolveKatexPackageRoot();
  const compilerPath = path.join(
    katexPackageRoot,
    "scripts",
    "compileLatexLayoutToTs.ts",
  );

  const result = spawnSync(
    process.execPath,
    [
      "--experimental-strip-types",
      compilerPath,
      document.inputPath,
      outputLayoutPath,
      document.documentId,
      outputLabelIndexPath,
    ],
    {
      cwd: katexPackageRoot,
      stdio: "inherit",
    },
  );

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }

  process.exit(result.status ?? 1);
}

main();
