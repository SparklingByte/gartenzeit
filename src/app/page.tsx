'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { data: session, status } = useSession();
  const username = session?.user?.email;

  return (
    <main className='p-5'>
      <div className='flex justify-between items-center bg-white rounded-xl p-5'>
        <div>
          <h1 className='text-2xl font-bold'>Welcome</h1>
          <h2 className='text-xl'>{username || 'Unknown User'}</h2>
        </div>
        <Link href={'/profile'}>
          <Image
            src='/tempProfilePicture.jpg'
            width={80}
            height={80}
            alt='User Profile Picture'
            className='rounded-xl cursor-pointer'
          ></Image>
        </Link>
      </div>
    </main>
  );
}
