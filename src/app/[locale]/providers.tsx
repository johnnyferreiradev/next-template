'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { ModalProvider } from '@/contexts/ModalContext';
import { ToasterProvider } from '@/contexts/ToasterContext';

export function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <NextThemeProvider attribute="class">
      <ThemeProvider>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          onError={(error) => {
            if (!error.toString().startsWith('Error: MISSING_MESSAGE:')) {
              console.error(error);
            }
          }}
        >
          <ModalProvider>
            <ToasterProvider>{children}</ToasterProvider>
          </ModalProvider>
        </NextIntlClientProvider>
      </ThemeProvider>
    </NextThemeProvider>
  );
}
