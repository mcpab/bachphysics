/**
 * @file interfaces.ts
 * @description This file defines TypeScript interfaces and types used across the application.
 * It includes interfaces for configuration file data, layout components, and menu items.
 */

/**
 * @interface ValidConfigFilesData
 * @description Defines the structure of valid configuration file data.
 * @property {string} filePath - The path to the configuration file.
 * @property {string} content - The content of the configuration file.
 * @property {string} image - The image associated with the configuration file.
 * @property {string} title - The title of the configuration file.
 * @property {string} link - The link associated with the configuration file.
 * @property {number} order - The order of the configuration file.
 */
export interface ValidConfigFilesData {
    filePath: string;
    content: string;
    image: string;
    title: string;
    link: string;
    order: number; // Add the order field
}

/**
 * @interface ErrorConfigFilesData
 * @description Defines the structure of error configuration file data.
 * @property {string} filePath - The path to the configuration file.
 * @property {string} error - The error message associated with the configuration file.
 */
export interface ErrorConfigFilesData {
    filePath: string;
    error: string;
}

/**
 * @type ConfigFilesData
 * @description A union type that can be either valid configuration file data or error configuration file data.
 */
export type ConfigFilesData = ValidConfigFilesData | ErrorConfigFilesData;

/**
 * @type LayoutComponent
 * @description Defines the structure of a layout component.
 * @property {string} title - The title of the layout component.
 * @property {ConfigFilesData[]} results - An array of configuration file data results.
 */
export type LayoutComponent = {
    title: string;
    results: ConfigFilesData[];
}

/**
 * @interface MenuItem
 * @description Defines the structure of a menu item.
 * @property {string} name - The name of the menu item.
 * @property {string} path - The path of the menu item.
 * @property {MenuItem[]} [children] - An optional array of child menu items.
 * @property {number} [order] - An optional order of the menu item.
 */
export interface MenuItem {
    name: string;
    path: string;
    children?: MenuItem[];
    order?: number;
}