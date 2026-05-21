'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="frost" enableSystem={false} themes={['light', 'frost']}>
      {children}
    </ThemeProvider>
  );
}
