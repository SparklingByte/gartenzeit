import Chip from '../display/Chip';
import Link from 'next/link';
import StatusIndicator, { IndicatorColor } from '../display/StatusIndicator';
import {
  HarvestParticipationStatus,
  PublicUserDataSchema,
} from '@/lib/schemas';
import { z } from 'zod';
import AuthorCard from '../display/AuthorCard';
import { Harvest } from '@prisma/client';
import ParticipantsCount from './ParticipantsCount';

type HarvestCardProps = {
  harvest: Harvest;
  participantsAmount?: number | string;
  host: z.infer<typeof PublicUserDataSchema>;
  isOwner?: boolean;
  participationStatus?: z.infer<typeof HarvestParticipationStatus>;
};

export default function HarvestCard({
  harvest,
  host,
  participantsAmount,
  isOwner,
  participationStatus,
}: HarvestCardProps) {
  // Map for a color and text for the status indicator
  const statusMap: {
    [key in z.infer<typeof HarvestParticipationStatus>]: {
      color: IndicatorColor;
      text: string;
    };
  } = {
    CONFIRMED: {
      color: 'green',
      text: 'Your participation was confirmed',
    },
    PENDING: {
      color: 'red',
      text: 'Your request is pending',
    },
    REJECTED: {
      color: 'red',
      text: 'You were rejected from this harvest',
    },
  };

  let statusContent;

  if (!isOwner && participationStatus !== undefined) {
    statusContent = (
      <StatusIndicator
        color={statusMap[participationStatus].color}
        text={statusMap[participationStatus].text}
      />
    );
  } else if (isOwner) {
    statusContent = <Chip text='Hosted by you' color='primary' />;
  }

  return (
    <Link href={'/harvest/' + harvest.id}>
      <article className='flex flex-col gap-5 justify-evenly bg-background-50 text-text-100 rounded-xl p-5'>
        {statusContent}
        <h3 className='text-small-heading font-bold'>{harvest.title}</h3>
        <AuthorCard user={host} />
        <div className='flex gap-3'>
          <p>
            {harvest.dateTime.toLocaleDateString() +
              ' | ' +
              harvest.dateTime.toLocaleTimeString()}
          </p>
        </div>
        {participantsAmount && participantsAmount !== 0 && (
          <ParticipantsCount amount={participantsAmount}></ParticipantsCount>
        )}
        <div>
          <Chip
            text={harvest.location}
            color={'secondary'}
            icon={'location'}
          ></Chip>
        </div>
        <div>
          <Chip text={harvest.produce}></Chip>
        </div>
      </article>
    </Link>
  );
}
