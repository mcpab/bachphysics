import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // important: '#__next',
  theme: {
    extend: {},
  },
  // plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
  
};


export default config;
