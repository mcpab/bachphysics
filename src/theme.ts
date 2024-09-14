'use client';

import { Roboto, Lora } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const lora = Lora({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

 
import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#e0e0e0',
    },
    divider: 'rgba(206,56,56,0.12)',
  },
  typography: {
    h1: {
      fontFamily: roboto.style.fontFamily,
    },
    body2: {
      fontFamily: lora.style.fontFamily,
      fontSize: '0.9rem',
    },
    body1: {
      fontSize: '1.rem',
    },
    fontFamily: lora.style.fontFamily,
    h2: {
      fontFamily: roboto.style.fontFamily,
    },
    h3: {
      fontFamily: roboto.style.fontFamily,
    },
    h4: {
      fontFamily: roboto.style.fontFamily,
    },
    h5: {
      fontFamily: roboto.style.fontFamily,
    },
    h6: {
      fontSize: '0.9rem',
      fontFamily: 'Roboto',
    },
  },
};
  
const theme = createTheme(themeOptions);

export default theme;
