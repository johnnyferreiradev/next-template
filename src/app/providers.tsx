'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class">
      <ThemeProvider>{children}</ThemeProvider>
    </NextThemeProvider>
  );
}
