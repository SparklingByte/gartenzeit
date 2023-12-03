'use client';

import Button from '@/components/buttons/Button';
import { z } from 'zod';
import { UserHarvestParticipationStatus } from '@prisma/client';
import { HarvestTitle } from '@/lib/schemas';
import StatusIndicator from '@/components/ui/display/StatusIndicator';
import { useRouter } from 'next/navigation';

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
  let buttonText;
  let isDisabled;

  async function handleJoinHarvest() {
    const res = await fetch(`/api/harvests/${harvestId}/participants`, {
      method: 'POST',
    });
    const resData = await res.json();

    // Refresh the page
    if (res.ok) {
      return router.refresh();
    } else {
      console.error(resData.message);
    }
  }

  async function handleLeaveHarvest() {
    const res = await fetch(`/api/harvests/${harvestId}/participants`, {
      method: 'DELETE',
    });
    const resData = await res.json();

    // Refresh the page
    if (res.ok) {
      return router.refresh();
    } else {
      console.error(resData.message);
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
      <Button
        text={buttonText || '⚠️ ERROR'}
        disabled={isDisabled}
        showIcon={true}
        onClick={() => {
          if (!hasJoined) {
            handleJoinHarvest().then(() => {
              console.log('Join Function Done');
            });
          }
          if (hasJoined && participationStatus !== 'REJECTED') {
            handleLeaveHarvest().then(() => {
              console.log('Leave function done.');
            });
          }
        }}
      ></Button>
    </div>
  );
}
