
import { AppThemeProvider } from './AppThemeProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import './globals.css';
import { AppShell } from './components/AppShell';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (

    <html lang="en">
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
