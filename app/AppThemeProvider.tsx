'use client';

import '@mcpab/mui-theme/mui-augment';
import { createSiteTheme } from '@mcpab/mui-theme';
import { ThemeProvider } from '@mui/material/styles';
import { Inter, STIX_Two_Text } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import { brown, blueGrey, grey } from '@mui/material/colors';
//

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const stixTwoText = STIX_Two_Text({
  subsets: ['latin'],
  display: 'swap',
});

//

export const theme = createSiteTheme({
  preset: {
    palette: {
      mode: 'dark',

      background: {
        default: blueGrey[900],
        paper: brown[50],
      },

      text: {
        primary: blueGrey[900],
        secondary: blueGrey[700],
      },

      primary: {
        main: brown[50],
      },

      secondary: {
        main: brown[200],
      },
    },

    typography: {
      fontFamily: inter.style.fontFamily,

      h1: { fontFamily: stixTwoText.style.fontFamily },
      h2: { fontFamily: stixTwoText.style.fontFamily },
      h3: { fontFamily: stixTwoText.style.fontFamily },
      h4: { fontFamily: stixTwoText.style.fontFamily },

      narrative: {
        fontFamily: stixTwoText.style.fontFamily,
      },
      lead: {
        fontFamily: stixTwoText.style.fontFamily,
      },
      quote: {
        fontFamily: stixTwoText.style.fontFamily,
      },

      button: {
        fontFamily: inter.style.fontFamily,
      },
      caption: {
        fontFamily: inter.style.fontFamily,
      },
      eyebrow: {
        fontFamily: inter.style.fontFamily,
      },
      finePrint: {
        fontFamily: inter.style.fontFamily,
      },
      strapline: {
        fontFamily: inter.style.fontFamily,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            backgroundColor: grey[900],
          },
          body: {
            backgroundColor: grey[900]
          },
        },
      },
    }
  },

});
export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}