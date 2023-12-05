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
  const router = useRouter();

  async function handleHarvestDelete() {
    // Reset alert box
    setShowSuccessAlert(false);
    const res = await fetch(`/api/harvests/${harvestId}`, {
      method: 'DELETE',
    });
    console.log(harvestId);

    const resBody = await res.json();

    if (!res.ok) {
      console.error(resBody.message);
      return;
    }

    setShowSuccessAlert(true);

    // Redirect user after 3 seconds
    setTimeout(() => {
      router.replace('/');
    }, 3000);
  }

  return (
    <div>
      {showSuccessAlert && (
        <AlertBox
          status='success'
          title='Harvest deleted'
          message='The harvest was successfully deleted.'
        ></AlertBox>
      )}
      <Button
        text='Delete harvest'
        showIcon={false}
        disabled={showSuccessAlert}
        onClick={() => {
          handleHarvestDelete();
        }}
      ></Button>
    </div>
  );
}
