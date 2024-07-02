/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  theme: {
    extend: {
      backgroundImage: {
        'body-img-2': "url('/img/osarugue-igbinoba-KZPIHQvOIvQ-unsplash.jpg')",
        'body-img-4': "url('/img/bg4.jpg')",
        
      },
      height: {
        '120': '30rem', 
        '140': '35rem',
        '180': '45rem',
        '280': '70rem'},
    },
    fontFamily: {
      sans: ['roboto', 'sans-serif'],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
