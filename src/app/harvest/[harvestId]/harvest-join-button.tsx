'use client';

import Button from '@/components/buttons/Button';
import { z } from 'zod';
import { UserHarvestParticipationStatus } from '@prisma/client';
import { HarvestTitle } from '@/lib/schemas';
import StatusIndicator from '@/components/ui/display/StatusIndicator';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AlertBox from '@/components/ui/display/AlertBox';

type HarvestJoinButtonProps = {
  harvestId: z.infer<typeof HarvestTitle>;
  isHost: boolean;
  hasJoined: boolean;
  participationStatus?: UserHarvestParticipationStatus;
};

export default function HarvestJoinButton({
  harvestId,
  isHost,
  hasJoined,
  participationStatus,
}: HarvestJoinButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<{ isLoading: boolean; text: string }>({
    isLoading: false,
    text: 'Loading...',
  });
  const [alert, setAlert] = useState<{
    title: string;
    message: string;
    status: 'success' | 'error';
  }>();

  let buttonText;
  let isDisabled;

  async function handleJoinHarvest() {
    setLoading({ isLoading: true, text: 'Joining harvest...' });
    const res = await fetch(`/api/harvests/${harvestId}/participants`, {
      method: 'POST',
    });
    const resData = await res.json();

    // Refresh the page
    if (res.ok) {
      setLoading({ isLoading: false, text: 'Joining harvest...' });
      return router.refresh();
    } else {
      setAlert({ title: 'Error', message: resData.message, status: 'error' });
      setLoading({ isLoading: false, text: 'Joining harvest...' });
    }
  }

  async function handleLeaveHarvest() {
    setLoading({ isLoading: true, text: 'Leaving harvest...' });

    const res = await fetch(`/api/harvests/${harvestId}/participants`, {
      method: 'DELETE',
    });
    const resData = await res.json();

    // Refresh the page
    if (res.ok) {
      setLoading({ isLoading: false, text: 'Leaving harvest...' });
      return router.refresh();
    } else {
      setAlert({ title: 'Error', message: resData.message, status: 'error' });
      setLoading({ isLoading: false, text: 'Leaving harvest...' });
    }
  }

  if (isHost) {
    buttonText = 'Cannot join your own harvest';
    isDisabled = true;
  } else if (!hasJoined) {
    buttonText = 'Join the harvest';
    isDisabled = false;
  } else if (participationStatus) {
    const map = {
      CONFIRMED: {
        text: 'Leave the harvest',
        isDisabled: false,
      },
      PENDING: {
        text: 'Cancel your request',
        isDisabled: false,
      },
      REJECTED: {
        text: 'Cannot join the harvest',
        isDisabled: true,
      },
    };

    buttonText = map[participationStatus].text;
    isDisabled = map[participationStatus].isDisabled;
  }

  return (
    <div className='flex'>
      {hasJoined && (
        <StatusIndicator
          text={
            participationStatus === 'CONFIRMED'
              ? 'Your participation was confirmed'
              : participationStatus === 'PENDING'
              ? 'Your request is pending'
              : 'Your request was rejected'
          }
          color={participationStatus === 'CONFIRMED' ? 'green' : 'red'}
        ></StatusIndicator>
      )}
      {alert && (
        <AlertBox
          title={alert.title}
          message={alert.message}
          status={alert.status}
        ></AlertBox>
      )}
      <Button
        isLoading={loading.isLoading}
        loadingText={loading.text}
        text={buttonText || '⚠️ ERROR'}
        disabled={isDisabled || loading.isLoading}
        showIcon={true}
        onClick={() => {
          setAlert(undefined);

          if (!hasJoined) {
            handleJoinHarvest();
          }
          if (hasJoined && participationStatus !== 'REJECTED') {
            handleLeaveHarvest();
          }
        }}
      ></Button>
    </div>
  );
}
