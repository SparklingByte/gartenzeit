import { Paragraph } from '@/components/typography/Typography';
import { IoPerson } from 'react-icons/io5';

export default function ParticipantsCount({
  amount,
}: {
  amount: number | string;
}) {
  return (
    <div className='flex gap-2 items-center'>
      <IoPerson />
      <Paragraph>{amount}</Paragraph>
    </div>
  );
}
