'use client';

import { SessionProvider, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  const username = session?.user?.email || 'No user logged in';

  return (
    <main>
      <h1>Hello and welcome {username}</h1>
    </main>
  );
}
