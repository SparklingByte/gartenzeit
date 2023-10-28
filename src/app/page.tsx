'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import user from './data/user.json';

export default function Home() {
  const { data: session, status } = useSession();
  const username = session?.user?.email || user.username;

  return <main className='p-5'></main>;
}
