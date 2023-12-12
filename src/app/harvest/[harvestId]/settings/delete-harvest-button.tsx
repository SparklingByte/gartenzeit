'use client';

import Button from '@/components/buttons/Button';
import { useState } from 'react';
import AlertBox from '@/components/ui/display/AlertBox';
import { useRouter } from 'next/navigation';

export default function DeleteHarvestButton({
  harvestId,
}: {
  harvestId: string;
}) {
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>();
  const [loading, setLoading] = useState<{ isLoading: boolean; text?: string }>(
    { isLoading: false }
  );
  const router = useRouter();

  async function handleHarvestDelete() {
    setLoading({ isLoading: true, text: 'Deleting harvest...' });

    // Reset alert box
    setShowSuccessAlert(false);
    const res = await fetch(`/api/harvests/${harvestId}`, {
      method: 'DELETE',
    });
    console.log(harvestId);

    const resBody = await res.json();

    if (!res.ok) {
      console.error(resBody.message);
      setLoading({ isLoading: false });
      return;
    }

    setShowSuccessAlert(true);

    // Redirect user after 2 seconds
    setLoading({ isLoading: true, text: 'Redirecting to homepage...' });

    setTimeout(() => {
      router.replace('/');
    }, 2000);
  }

  return (
    <div className='grid'>
      {showSuccessAlert && (
        <AlertBox
          status='success'
          title='Harvest deleted'
          message='The harvest was successfully deleted.'
        ></AlertBox>
      )}
      <Button
        isLoading={loading.isLoading}
        loadingText={loading.text}
        text='Delete harvest'
        showIcon={false}
        disabled={loading.isLoading}
        onClick={() => {
          handleHarvestDelete();
        }}
      ></Button>
    </div>
  );
}
