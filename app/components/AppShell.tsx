// components/AppShell.tsx
'use client';

import SiteMenu from "./SiteMenu";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteMenu />
      <main>{children}</main>
    </>
  );
}