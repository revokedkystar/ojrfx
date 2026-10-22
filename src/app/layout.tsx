import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: 'OJR Trades FX | Transparent Signals Trading & Portfolio Growth',
  description: 'Join OJR Trades FX. 8–10% monthly target profits, weekly scalping, transparent trade logs, and a 100% refund guarantee on test accounts.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="site-background min-h-screen text-[#070A0A] flex flex-col font-serif selection:bg-[#0E5C59] selection:text-white">
        {/* Luxury gold scroll progress scrubbing bar */}
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
