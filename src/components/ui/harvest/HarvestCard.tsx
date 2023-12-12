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
import { Heading, Paragraph } from '@/components/typography/Typography';

type HarvestCardProps = {
  harvest: Harvest;
  participantsAmount?: number | string;
  host: z.infer<typeof PublicUserDataSchema>;
  isHost?: boolean;
  participationStatus?: z.infer<typeof HarvestParticipationStatus>;
};

export default function HarvestCard({
  harvest,
  host,
  participantsAmount,
  isHost,
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

  const harvestAlreadyOver = harvest.dateTime.getTime() < new Date().getTime();

  const dateTimeContent =
    harvest.dateTime.toDateString() +
    ' | ' +
    harvest.dateTime.toLocaleTimeString();

  let statusContent;

  if (!isHost && participationStatus !== undefined && !harvestAlreadyOver) {
    statusContent = (
      <StatusIndicator
        color={statusMap[participationStatus].color}
        text={statusMap[participationStatus].text}
      />
    );
  }

  return (
    <Link href={'/harvest/' + harvest.id}>
      <div className='flex flex-col p-7 gap-5 justify-evenly bg-background-50 text-text-100 rounded-xl '>
        {statusContent}
        <Heading size='small'>{harvest.title} </Heading>
        <AuthorCard user={host} isOwnProfile={isHost ? true : false} />
        <div className='flex gap-3'>
          {harvestAlreadyOver ? (
            <Chip
              color='red'
              icon='clock'
              text={dateTimeContent + ' (Already over)'}
            />
          ) : (
            <Chip color='secondary' text={dateTimeContent} icon='clock'></Chip>
          )}
        </div>
        {participantsAmount && participantsAmount !== 0 && (
          <ParticipantsCount amount={participantsAmount}></ParticipantsCount>
        )}
        <div className='flex gap-3 flex-wrap'>
          <Chip
            text={harvest.location}
            color={'secondary'}
            icon={'location'}
          ></Chip>
          <Chip icon='apple' text={harvest.produce} color='secondary'></Chip>
        </div>
      </div>
    </Link>
  );
}
