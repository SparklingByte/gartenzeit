import Chip from '../display/Chip';
import Link from 'next/link';
import StatusIndicator, { IndicatorColor } from '../display/StatusIndicator';

type UserParticipationStatus = 'rejected' | 'pending' | 'confirmed';

// TODO Replace with official type
type HarvestCardProps = {
  id: string;
  title: string;
  userParticipationStatus: UserParticipationStatus;
  date: string;
  time: string;
  locationName: string;
  vegetables: string[];
};

export default function HarvestCard({
  id,
  title,
  userParticipationStatus,
  date,
  time,
  locationName,
  vegetables,
}: HarvestCardProps) {
  const vegetablesString = vegetables.join(', ');

  const statusMap: {
    [key in UserParticipationStatus]: { color: IndicatorColor; text: string };
  } = {
    confirmed: {
      color: 'green',
      text: 'Confirmed',
    },
    pending: {
      color: 'red',
      text: 'Pending',
    },
    rejected: {
      color: 'red',
      text: 'Rejected',
    },
  };

  return (
    <Link href={'/harvest/' + (id || 'not-found')}>
      <article className='flex flex-col gap-5 justify-evenly bg-background-50 text-text-100 rounded-xl p-5'>
        <StatusIndicator
          color={statusMap[userParticipationStatus].color}
          text={statusMap[userParticipationStatus].text}
        />
        <h3 className='text-small-heading font-bold'>{title}</h3>
        <div className='flex gap-3'>
          <p>{date}</p>
          <p>{time}</p>
        </div>
        <div>
          <Chip
            text={locationName}
            color={'secondary'}
            icon={'location'}
          ></Chip>
        </div>
        <div>
          <Chip text={vegetablesString}></Chip>
        </div>
      </article>
    </Link>
  );
}
