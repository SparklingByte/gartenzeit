'use client';

import Button from '@/components/buttons/Button';
import { useState } from 'react';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const [showButtonLoading, setShowButtonLoading] = useState<boolean>(false);

  return (
    <Button
      loadingText='Logging you out...'
      isLoading={showButtonLoading}
      onClick={() => {
        setShowButtonLoading(true);
        signOut();
      }}
      color={'warning'}
      disabled={showButtonLoading}
      text='Logout'
      showIcon={false}
    ></Button>
  );
}
