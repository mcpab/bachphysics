
import { AppThemeProvider } from './AppThemeProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { Inter, STIX_Two_Text } from 'next/font/google';
import '@mcpab/katex/styles/global.css';
import './globals.css';
import { AppShell } from './components/AppShell';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const stixTwoText = STIX_Two_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-stix-two-text',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (

    <html lang="en" className={`${inter.variable} ${stixTwoText.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <AppThemeProvider>
            <AppShell>{children}</AppShell>
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>

  );
}
