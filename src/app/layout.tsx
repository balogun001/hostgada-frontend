import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootClient from 'src/utils/RootClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hostgada',
  description: 'Event Booking App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}
