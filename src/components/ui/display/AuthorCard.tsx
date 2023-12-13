import { Paragraph } from '@/components/typography/Typography';
import { PublicUserDataSchema } from '@/lib/schemas';
import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';

type AuthorCardProps = {
  user: z.infer<typeof PublicUserDataSchema>;
  isOwnProfile: boolean;
};

const IMAGE_SIZE = 25;
// TODO Replace with global constance
const SUPABASE_STORAGE_URL =
  'https://fvmubtpjuonfgmaspyzn.supabase.co/storage/v1/object/public/user_avatars/';

export default function AuthorCard({ user, isOwnProfile }: AuthorCardProps) {
  return (
    <div className='flex gap-3 items-center'>
      <Image
        src={
          user.image
            ? SUPABASE_STORAGE_URL + user.image
            : '/placeholder-image.jpg'
        }
        alt={`Profile picture of ${user.username}`}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        className={`w-[25px] h-[25px] object-cover bg-text-100 rounded-md`}
      ></Image>
      <Paragraph>
        Hosted by{' '}
        <span className='font-bold'>
          {isOwnProfile ? 'you' : user.username}
        </span>
      </Paragraph>
    </div>
  );
}
