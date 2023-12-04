'use client';

import Button from '@/components/buttons/Button';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <Button onClick={() => signOut()} text='Logout' showIcon={false}></Button>
  );
}
