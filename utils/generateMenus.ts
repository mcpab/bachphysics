import fs from 'fs';
import path from 'path';
import { MenuItem,ConfigFilesData } from '@/src/interfaces/interfaces';
import { parseConfigFile } from './findConfigFiles';

/**
 * Generates a hierarchical menu structure based on the directory contents and configuration files.
 * 
 * @param {string} dir - The directory path to start generating the menu from.
 * @param {string} [basePath='/'] - The base path to be used for generating relative paths in the menu items.
 * @param {string} configFile - The name of the configuration file to look for in each directory.
 * @returns {MenuItem[]} An array of MenuItem objects representing the hierarchical menu structure.
 */
export function generateMenu(dir:string,configFile:string,basePath = '/',):MenuItem[] {

  const menu: MenuItem[] = [];

  const items = fs.readdirSync(dir);

  items.forEach(item => {

    const itemPath = path.join(dir, item);
    const relativePath = path.join(basePath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory() && fs.existsSync(path.join(itemPath, 'page.tsx')) ) {
      
        const subMenu = generateMenu(itemPath, configFile,relativePath);
        let gh:MenuItem = {
            name: item.replace('(home)', 'Home'),
            path: relativePath.replace('(home)', ''),
            children: subMenu,
          }
          if(fs.existsSync(path.join(itemPath, configFile))){
            const configData:ConfigFilesData|null = parseConfigFile(path.join(itemPath, configFile));
            if(configData && 'order' in configData){
              gh.order = configData.order;
            }
          }
      menu.push(gh);
    }
 
  });

  return menu;
}