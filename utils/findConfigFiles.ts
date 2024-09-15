import * as fs from 'fs';
import * as path from 'path';

interface ConfigData {
    filePath: string;
    title: string;
    content: string;
    image: string;
    link: string;
}

interface ErrorData {
    error: string;
    filePath?: string;
}
export type ResultData = ConfigData | ErrorData;

export function findConfigFiles(dir: string, fileName: string): ResultData[] {
    let results: ResultData[] = [];

    function readDirRecursive(currentDir: string) {
        let files: string[];
        try {
            files = fs.readdirSync(currentDir);
        } catch (error) {
            if (error instanceof Error) {
                results.push({ error: `Error reading directory ${currentDir}: ${error.message}` });
            } else {
                results.push({ error: `Unknown error reading directory ${currentDir}` });
            }
            return;
        }

        for (const file of files) {
            const fullPath = path.join(currentDir, file);
            let stat: fs.Stats;
            try {
                stat = fs.statSync(fullPath);
            } catch (error) {
                if (error instanceof Error) {
                    results.push({ error: `Error getting stats for file ${fullPath}: ${error.message}`, filePath: fullPath });
                } else {
                    results.push({ error: `Unknown error getting stats for file ${fullPath}`, filePath: fullPath });
                }
                continue;
            }
            if (stat.isDirectory()) {
                readDirRecursive(fullPath);
            } else if (file === fileName) {
                const configData = parseConfigFile(fullPath);
                if (configData) {
                    results.push(configData);
                }
            }
        }
    }

    readDirRecursive(dir);
    return results;
}

function parseConfigFile(filePath: string): ResultData | null {
    let content: string;
    try {
        content = fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        if (error instanceof Error) {
            return { error: `Error reading file ${filePath}: ${error.message}`, filePath };
        } else {
            return { error: `Unknown error reading file ${filePath}`, filePath };
        }
    }

    const lines = content.split('\n');
    let contentValue = '';
    let imageValue = '';
    let titleValue = '';
    let linkValue = '';

    for (const line of lines) {
        if (line.startsWith('Content:')) {
            contentValue = line.replace('Content:', '').trim();
        } else if (line.startsWith('Image:')) {
            imageValue = line.replace('Image ', '').trim();
        } else if (line.startsWith('Title:')) {
            titleValue = line.replace('Title:', '').trim();
        } else if (line.startsWith('Link:')) {
            linkValue = line.replace('Link:', '').trim();
        }
    }

    const missingFields = [];
    if (!contentValue) missingFields.push('Content');
    if (!imageValue) missingFields.push('Image');
    if (!titleValue) missingFields.push('Title');
    if (!linkValue) missingFields.push('Link');

    if (missingFields.length > 0) {
        return { error: `Missing required fields (${missingFields.join(', ')}) in file ${filePath}`, filePath };
    }

  return { filePath, content: contentValue, image: imageValue, title: titleValue, link: linkValue };
}