import type { Metadata } from 'next';
import NextAuthProvider from './context/NextAuthProvider';
import Link from 'next/link';
import './globals.css';
import LogoBar from '@/components/ui/display/LogoBar';

export const metadata: Metadata = {
  title: 'Gartenzeit',
  description: 'Harvest together.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-background-80'>
        <LogoBar />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
