

import type { Metadata } from "next";
import Container from '@mui/material/Container';
import "./globals.css";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import Navigation from '../src/navigation';
import { StyledEngineProvider } from '@mui/material/styles';

export const metadata: Metadata = {
  title: "Music, Physics and Friends",
  description: "Music, Physics and Friends",
};

import Image from 'next/image'

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className="font-sans flex flex-col bg-[url('/img/bg7.jpg')]">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <Navigation clerkKey="pk_test_d2l0dHktY2FyaWJvdS0yNC5jbGVyay5hY2NvdW50cy5kZXYk"/>

              <main className="font-sans flex flex-col">
                {children}
              </main>

            </ThemeProvider>
          </StyledEngineProvider>
        </AppRouterCacheProvider>
      </body>
    </html>

  );
}
