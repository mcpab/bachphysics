import fs from 'fs';
import path from 'path';

import { ValidConfigFilesData, ConfigFilesData } from '@/src/interfaces/interfaces'; // Adjust the path as needed

/**
 * Finds configuration files in a specified directory.
 * 
 * This function searches for files with a specified name within a given directory.
 * It can optionally search subdirectories recursively. The function returns an array
 * of configuration data objects, which can include valid data or error information.
 * 
 * @param {string} dir - The directory to search in.
 * @param {string} fileName - The name of the configuration file to search for.
 * @param {boolean} [recursive=false] - Whether to search subdirectories recursively.
 * 
 * @returns {ConfigFilesData[]} An array of configuration data objects.
 * 
 * Example Usage:
 * const results = findConfigFiles('/path/to/dir', 'config.json', true);
 * 
 * The function will:
 * - Search the specified directory for files with the given name.
 * - If `recursive` is true, it will also search subdirectories.
 * - Parse the found files and return their content as configuration data objects.
 * - Include error information if a file cannot be read or parsed.
 * 
 * ConfigFilesData Type:
 * The ConfigFilesData type is expected to have the following structure:
 * 
 * interface ValidConfigFilesData {
 *   content: string;
 *   image: string;
 *   title: string;
 *   link: string;
 *   order: number;
 * }
 * 
 * interface ErrorConfigFilesData {
 *   error: string;
 *   filePath: string;
 * }
 * 
 * type ConfigFilesData = ValidConfigFilesData | ErrorConfigFilesData;
 */
function findConfigFiles(dir: string, fileName: string, recursive: boolean = false): ConfigFilesData[] {

    /**
     * Recursively searches a directory for configuration files.
     * 
     * @param {string} directory - The directory to search in.
     * @param {boolean} isRecursive - Whether to search subdirectories recursively.
     */

    const results: ConfigFilesData[] = [];

    function searchDirectory(directory: string, isRecursive: boolean) {
        const items = fs.readdirSync(directory);
        for (const item of items) {
            const fullPath = path.join(directory, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                // Always check the immediate subdirectory for the fileName
                const subdirectoryFiles = fs.readdirSync(fullPath);
                for (const subFile of subdirectoryFiles) {
                    if (subFile === fileName) {
                        const configData = parseConfigFile(path.join(fullPath, subFile));
                        if (configData) {
                            results.push(configData);
                        }
                    }
                }
                // If recursive, continue searching within this subdirectory
                if (isRecursive) {
                    searchDirectory(fullPath, isRecursive);
                }
            } 
/*             else if (item === fileName) {
                const configData = parseConfigFile(fullPath);
                if (configData) {
                    results.push(configData);
                }
            } */
        }
    }

    searchDirectory(dir, recursive);
    return results;
}

/**
 * Parses a configuration file and returns its content.
 * 
 * This function reads a file and attempts to parse its content as JSON.
 * If the file cannot be read or the content cannot be parsed, it returns
 * an error object with relevant information.
 * 
 * @param {string} filePath - The path to the configuration file.
 * 
 * @returns {ConfigFilesData | null} The parsed configuration data or an error object.
 */
 function parseConfigFile(filePath: string): ConfigFilesData | null {
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

    let configData: ValidConfigFilesData;
    try {
        configData = JSON.parse(content);
    } catch (error) {
        if (error instanceof Error) {
            return { error: `Error parsing JSON in file ${filePath}: ${error.message}`, filePath };
        } else {
            return { error: `Unknown error parsing JSON in file ${filePath}`, filePath };
        }
    }

    const { content: contentValue, image: imageValue, title: titleValue, order: order } = configData;

    const missingFields = [];
    if (!contentValue) missingFields.push('Content');
    if (!imageValue) missingFields.push('Image');
    if (!titleValue) missingFields.push('Title');
    if (!order) missingFields.push('Order');

    if (missingFields.length > 0) {
        return { error: `Missing required fields (${missingFields.join(', ')}) in file ${filePath}`, filePath };
    }

    const directory = path.dirname(filePath).replace(/(.*)app/, ''); // Clean the path
    return { filePath, content: contentValue, image: imageValue, title: titleValue, link: directory, order: order };
}



export { findConfigFiles,parseConfigFile };
