import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const libraryRoot = path.join(projectRoot, "library");
const compilationDelayMilliseconds = 150;
const pendingCompilations = new Map<string, NodeJS.Timeout>();
const runningCompilations = new Set<string>();
const queuedCompilations = new Set<string>();

function findSourceDirectories(directoryPath: string): string[] {
  const sourceDirectories: string[] = [];

  for (const entry of fs.readdirSync(directoryPath, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === "generated") {
      continue;
    }

    const entryPath = path.join(directoryPath, entry.name);
    if (entry.name === "source") {
      sourceDirectories.push(entryPath);
    } else {
      sourceDirectories.push(...findSourceDirectories(entryPath));
    }
  }

  return sourceDirectories;
}

function findDocumentRoots(sourceDirectory: string): string[] {
  const generatedDirectory = path.join(path.dirname(sourceDirectory), "generated");

  if (!fs.existsSync(generatedDirectory)) {
    return [];
  }

  return fs.readdirSync(generatedDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".layout.ast.ts"))
    .map((entry) => entry.name.replace(/\.layout\.ast\.ts$/, ".tex"))
    .map((fileName) => path.join(sourceDirectory, fileName))
    .filter((filePath) => fs.existsSync(filePath));
}

function compileDocument(documentPath: string): void {
  if (runningCompilations.has(documentPath)) {
    queuedCompilations.add(documentPath);
    return;
  }

  runningCompilations.add(documentPath);
  console.log(`Compiling ${path.relative(projectRoot, documentPath)}`);

  const compiler = spawn(
    "pnpm",
    ["latex:layout:ts", documentPath],
    { cwd: projectRoot, stdio: "inherit" },
  );

  compiler.on("error", (error) => {
    console.error(`Could not start LaTeX compilation: ${error.message}`);
  });

  compiler.on("close", (exitCode) => {
    runningCompilations.delete(documentPath);

    if (exitCode !== 0) {
      console.error(`Compilation failed with exit code ${exitCode ?? "unknown"}.`);
    }

    if (queuedCompilations.delete(documentPath)) {
      compileDocument(documentPath);
    }
  });
}

function scheduleSourceDirectoryCompilation(changedPath: string): void {
  const sourceDirectory = path.dirname(changedPath);
  const existingTimer = pendingCompilations.get(sourceDirectory);

  if (existingTimer) {
    clearTimeout(existingTimer);
  }

  // Editors can emit several writes for one save, so wait briefly before compiling.
  const timer = setTimeout(() => {
    pendingCompilations.delete(sourceDirectory);
    const documentRoots = findDocumentRoots(sourceDirectory);

    if (documentRoots.length === 0) {
      console.warn(
        `No compiled document root found for ${path.relative(projectRoot, changedPath)}.`,
      );
      return;
    }

    for (const documentRoot of documentRoots) {
      compileDocument(documentRoot);
    }
  }, compilationDelayMilliseconds);

  pendingCompilations.set(sourceDirectory, timer);
}

if (!fs.existsSync(libraryRoot)) {
  console.error(`Could not find library directory at ${libraryRoot}`);
  process.exit(1);
}

const sourceDirectories = findSourceDirectories(libraryRoot);
for (const sourceDirectory of sourceDirectories) {
  fs.watch(sourceDirectory, (_eventType, fileName) => {
    if (fileName && path.extname(fileName) === ".tex") {
      scheduleSourceDirectoryCompilation(path.join(sourceDirectory, fileName));
    }
  });
}

console.log("Watching library/**/source/*.tex");
