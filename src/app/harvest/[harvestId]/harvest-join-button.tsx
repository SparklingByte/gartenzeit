'use client';

import Button from '@/components/buttons/Button';
import { z } from 'zod';
import { HarvestSchema, UserId } from '@/lib/schemas';
import { useState } from 'react';
import AlertBox from '@/components/ui/display/AlertBox';
import { UserHarvestParticipationStatus } from '@prisma/client';
import { useRouter } from 'next/navigation';

type HarvestJoinButtonProps = {
  harvest: z.infer<typeof HarvestSchema>;
  userId: z.infer<typeof UserId>;
  participation: { status: UserHarvestParticipationStatus };
};

export default function HarvestJoinButton({
  harvest,
  userId,
  participation,
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

  const isHost = harvest.hostUserId === userId;

  async function handleJoinHarvest() {
    setLoading({ isLoading: true, text: 'Joining harvest...' });
    const res = await fetch(`/api/harvests/${harvest.id}/participations`, {
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

    const res = await fetch(`/api/harvests/${harvest.id}/participations`, {
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

  const text =
    participation?.status === 'CONFIRMED' || participation?.status === 'PENDING'
      ? 'Leave the harvest'
      : participation?.status === 'REJECTED'
      ? 'Cannot join this harvest'
      : isHost
      ? 'Cannot join your own harvest'
      : 'Join this harvest';

  return (
    <div className='grid'>
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
        text={text || 'Join'}
        color={
          participation?.status === 'CONFIRMED' ||
          participation?.status === 'PENDING'
            ? 'warning'
            : 'primary'
        }
        disabled={
          participation?.status === 'REJECTED' ||
          harvest.hostUserId === userId ||
          loading.isLoading
        }
        showIcon={true}
        onClick={() => {
          setAlert(undefined);

          if (!participation?.status) {
            handleJoinHarvest();
            return;
          }

          if (participation?.status !== 'REJECTED') {
            handleLeaveHarvest();
            return;
          }
        }}
      ></Button>
    </div>
  );
}
