import type { Metadata } from 'next';
import { Providers } from './providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AIChatbot from '@/components/ai/AIChatbot';
import DevConsole from '@/components/terminal/DevConsole';
import ThemeSwitcher from '@/components/theme/ThemeSwitcher';
import './globals.css';
import { baseMetadata } from '@/lib/metadata';

export const metadata: Metadata = baseMetadata;

// Force rebuild

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
