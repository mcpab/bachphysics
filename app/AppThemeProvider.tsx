'use client';

import '@mcpab/mui-theme/mui-augment';
import { createSiteTheme } from '@mcpab/mui-theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { brown, grey } from '@mui/material/colors';

const interfaceFontFamily = 'var(--font-inter)';
const contentFontFamily = 'var(--font-stix-two-text)';

const backGroundColor = grey[900];
const paperColor = grey[800];

export const theme = createSiteTheme({
  preset: {
    palette: {
      mode: 'dark',

      background: {
        default: backGroundColor,
        paper: paperColor,
      },

      text: {
        primary: '#f1ebe4',
        secondary: '#d0c5ba',
      },

      divider: 'rgba(241, 235, 228, 0.22)',

      action: {
        hover: 'rgba(241, 235, 228, 0.07)',
      },

      primary: {
        main: brown[100],
      },

      secondary: {
        main: brown[200],
      },
    },

    typography: {
      fontFamily: interfaceFontFamily,

      h1: { fontFamily: contentFontFamily },
      h2: { fontFamily: contentFontFamily },
      h3: { fontFamily: contentFontFamily },
      h4: { fontFamily: contentFontFamily },

      narrative: {
        fontFamily: contentFontFamily,
      },
      lead: {
        fontFamily: contentFontFamily,
      },
      quote: {
        fontFamily: contentFontFamily,
      },

      button: {
        fontFamily: interfaceFontFamily,
      },
      caption: {
        fontFamily: interfaceFontFamily,
      },
      eyebrow: {
        fontFamily: interfaceFontFamily,
      },
      finePrint: {
        fontFamily: interfaceFontFamily,
      },
      strapline: {
        fontFamily: interfaceFontFamily,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            backgroundColor: backGroundColor,
            fontFamily: interfaceFontFamily,
          },
          body: {
            backgroundColor: backGroundColor,
            fontFamily: interfaceFontFamily,
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
