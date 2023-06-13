import './globals.css';
import { Inter } from 'next/font/google';

import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HarmonyUI',
  description:
    'Construindo Harmonia: Crie Aplicações Web com um Design System Moderno',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} default-scroll`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
