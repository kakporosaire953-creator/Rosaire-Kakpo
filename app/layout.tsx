import type { Metadata } from 'next';
import { Space_Grotesk, DM_Mono } from 'next/font/google';
import { Providers } from './providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AIChatbot from '@/components/ai/AIChatbot';
import DevConsole from '@/components/terminal/DevConsole';
import ThemeSwitcher from '@/components/theme/ThemeSwitcher';
import './globals.css';
import { baseMetadata } from '@/lib/metadata';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = baseMetadata;
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          {/* V2 Features */}
          <AIChatbot />
          <DevConsole />
          <ThemeSwitcher />
        </Providers>
      </body>
    </html>
  );
}
