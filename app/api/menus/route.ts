// utils/generateMenu.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const appDirectory = path.join(process.cwd(), 'app'); 

interface MenuItem {
  name: string;
  path: string;
  children?: MenuItem[];
}

function generateMenu(dir:string, basePath = '\\'):MenuItem[] {

  const menu: MenuItem[] = [];

  const items = fs.readdirSync(dir);

  items.forEach(item => {

    const itemPath = path.join(dir, item);
    const relativePath = path.join(basePath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory() && fs.existsSync(path.join(itemPath, 'page.tsx')) ) {
      const subMenu = generateMenu(itemPath, relativePath);
      menu.push({
        name: item.replace('(home)', 'Home'),
        path: relativePath.replace('(home)', ''),
        children: subMenu,
      });
    }
 
  });

  return menu;
}

export async function GET(request: Request) {
  try {
    const menu = generateMenu(appDirectory);
    return NextResponse.json({ menu: menu }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error  }, { status: 500 });
  }
}


