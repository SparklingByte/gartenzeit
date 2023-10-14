import type { Metadata } from 'next';
import NextAuthProvider from './context/NextAuthProvider';

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
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
