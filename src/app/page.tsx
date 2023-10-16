'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  const username = session?.user?.email || 'No user logged in';

  return (
    <main className='bg-black'>
      <h1>Hello and welcome {username}</h1>
      {status === 'authenticated' ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <button onClick={() => signIn()}>Login</button>
      )}
    </main>
  );
}
