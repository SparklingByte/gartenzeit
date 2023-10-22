import type { Metadata } from 'next';
import NextAuthProvider from './context/NextAuthProvider';
import Link from 'next/link';
import './globals.css';

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
      <body className='bg-rose-50'>
        <header className='bg-green-300 text-center p-3'>
          <Link
            href='/'
            className='text-xl font-bold'
          >
            Gartenzeit
          </Link>
        </header>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
