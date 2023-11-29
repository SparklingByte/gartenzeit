import Chip from '../display/Chip';
import Link from 'next/link';
import StatusIndicator, { IndicatorColor } from '../display/StatusIndicator';
import { HarvestParticipationStatus, HarvestSchema } from '@/lib/schemas';
import { z } from 'zod';

type HarvestCardProps = {
  harvest: z.infer<typeof HarvestSchema>;
  isOwner?: boolean;
  participationStatus?: z.infer<typeof HarvestParticipationStatus>;
};

export default function HarvestCard({
  harvest,
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
      text: 'Accepted',
    },
    PENDING: {
      color: 'red',
      text: 'Pending',
    },
    REJECTED: {
      color: 'red',
      text: 'Rejected',
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
        <h3 className='text-small-heading font-bold'>{harvest.title}</h3>
        <div className='flex gap-3'>
          <p>
            {harvest.dateTime.toLocaleDateString() +
              ' | ' +
              harvest.dateTime.toLocaleTimeString()}
          </p>
        </div>
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
