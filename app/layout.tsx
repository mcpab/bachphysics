import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import Navigation from '../src/navigation';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const metadata: Metadata = {
  title: "Music, Physics and Friends",
  description: "Music, Physics and Friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CssBaseline />
      <body className="font-sans flex flex-col bg-[url('/img/bg7.jpg')]">
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Navigation clerkKey="pk_test_d2l0dHktY2FyaWJvdS0yNC5jbGVyay5hY2NvdW50cy5kZXYk" />
            <main className="font-sans flex flex-col">
              {children}
            </main>
          </ThemeProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}