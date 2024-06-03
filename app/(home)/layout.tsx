

import type { Metadata } from "next";
import Container from '@mui/material/Container';
import "../globals.css";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../src/theme';
import Navigation from '../../src/navigation';
import { StyledEngineProvider } from '@mui/material/styles';

export const metadata: Metadata = {
  title: "Brunelli Consulting",
  description: "The next generation consulting",
};

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
        <body className="font-sans flex flex-col bg-body-img-1">
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                {/* <div className="flex flex-col grow bg-colorado-nav bg-center bg-cover bg-no-repeat h-180"> */}
                  <Navigation />
                 {/*  <div className="flex-auto flex-col justify-center content-center">
                    <Container className=' text-4xl text-2xl text-gray-600'> <h1> Marco Brunelli, PhD</h1> </Container>
                    <Container className=' text-2xl text-slate-300'> <h3> Music and Physics</h3> </Container>
                  </div>
                </div> */}
                {/* </div>                 */}
                {/* <div className="flex-auto justify-center grow-0 items-start w-full bg-colorado-nav bg-center bg-cover bg-no-repeat h-96 "></div> */}
                {children}
              </ThemeProvider>
            </StyledEngineProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
 
  );
}
