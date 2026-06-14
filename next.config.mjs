import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isLocalLinkedPackages = process.env.LOCAL_LINKED_PACKAGES === 'true';

const resolvePackageRoot = (packageName) => `./node_modules/${packageName}`;

const sharedRuntimeAliases = {
  react: resolvePackageRoot('react'),
  'react-dom': resolvePackageRoot('react-dom'),
  '@emotion/react': resolvePackageRoot('@emotion/react'),
  '@emotion/styled': resolvePackageRoot('@emotion/styled'),
  '@mui/icons-material': resolvePackageRoot('@mui/icons-material'),
  '@mui/material': resolvePackageRoot('@mui/material'),
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [70, 75],
  },
  transpilePackages: ['@mcpab/web-blocks', '@mcpab/gridcss', '@mcpab/mui-theme'],
  turbopack: {
    resolveAlias: sharedRuntimeAliases,
    ...(isLocalLinkedPackages
      ? {
          root: path.resolve(__dirname, '../..'),
        }
      : {}),
  },
};

export default nextConfig;
