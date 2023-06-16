import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';

import { Providers } from './providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return [{ locale: 'pt-BR' }, { locale: 'en' }];
}

export const metadata = {
  title: 'HarmonyUI',
  description:
    'Construindo Harmonia: Crie Aplicações Web com um Design System Moderno',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  let messages;
  try {
    messages = (
      await import(`../../../public/locales/${locale}/translation.json`)
    ).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} default-scroll dark:bg-[var(--dark-color)]`}
      >
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
