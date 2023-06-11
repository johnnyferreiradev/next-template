'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ModalProvider } from '@/contexts/ModalContext';
import { ToasterProvider } from '@/contexts/ToasterContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class">
      <ThemeProvider>
        <ModalProvider>
          <ToasterProvider>{children}</ToasterProvider>
        </ModalProvider>
      </ThemeProvider>
    </NextThemeProvider>
  );
}
