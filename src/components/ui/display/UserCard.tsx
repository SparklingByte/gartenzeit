import Image from 'next/image';
import Link from 'next/link';
import { Heading, Paragraph } from '../../typography/Typography';
import { FaLocationDot } from 'react-icons/fa6';
import { PublicUserDataSchema } from '@/lib/schemas';
import { z } from 'zod';

type UserCardProps = {
  user: z.infer<typeof PublicUserDataSchema>;
};

const SUPABASE_STORAGE_URL =
  'https://fvmubtpjuonfgmaspyzn.supabase.co/storage/v1/object/public/user_avatars/';

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className='flex items-center gap-3 p-5 bg-background-50 rounded-xl'>
      <Link href={'/user/' + user.username}>
        <Image
          alt={`Profile picture of ${user.username}`}
          width={40}
          height={40}
          src={`${SUPABASE_STORAGE_URL}/${user.image}` || ''} // TODO Replace with placeholder image
          className={`w-[40px] h-[40px] object-cover bg-text-100 rounded-md`}
        />
      </Link>
      <div>
        <Heading size='small'>{user.username}</Heading>
        <div className='flex gap-1 items-center'>
          <FaLocationDot />
          <Paragraph>{user.location}</Paragraph>
        </div>
      </div>
    </div>
  );
}
