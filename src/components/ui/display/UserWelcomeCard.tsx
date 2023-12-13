import Image from 'next/image';
import Link from 'next/link';
import { Heading, Subheading } from '../../typography/Typography';

type UserWelcomeCardProps = {
  username: string;
  userProfileImage: string;
};

const IMAGE_SIZE = 80;
const SUPABASE_STORAGE_URL =
  'https://fvmubtpjuonfgmaspyzn.supabase.co/storage/v1/object/public/user_avatars/';

export default function UserWelcomeCard({
  username,
  userProfileImage,
}: UserWelcomeCardProps) {
  return (
    <div className='flex justify-between items-center bg-background-50 text-text-100 rounded-xl p-5'>
      <div>
        <Heading size='big'>Welcome</Heading>
        <Subheading size='big'>{username || 'Unkown User'}</Subheading>
      </div>
      <Link href={'/me'}>
        <Image
          src={
            userProfileImage
              ? SUPABASE_STORAGE_URL + userProfileImage
              : '/placeholder-image.jpg'
          }
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          alt={`Profile picture from ${username}`}
          className={`w-[80x] h-[80px] object-cover bg-text-100 rounded-md cursor-pointer`}
        ></Image>
      </Link>
    </div>
  );
}
