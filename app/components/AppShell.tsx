// components/AppShell.tsx
'use client';

import { SiteFooter } from "./SiteFooter";
import SiteMenu from "./SiteMenu";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteMenu />
       <main  >{children}</main>
      <SiteFooter/>
    </>
  );
}