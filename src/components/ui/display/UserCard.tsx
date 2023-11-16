import Image from 'next/image';
import Link from 'next/link';
import { Heading, Paragraph } from '../../typography/Typography';
import { FaLocationDot } from 'react-icons/fa6';

type UserCardProps = {
  username: string;
  userProfilePicture: string;
  locationName: string;
};

const PROFILE_PICTURE_SIZE = 40;

export default function UserCard({
  username,
  userProfilePicture,
  locationName,
}: UserCardProps) {
  return (
    <div className='flex items-center gap-3 p-5 bg-background-50 rounded-xl'>
      <Link href={'/user/' + username}>
        <Image
          alt={`Profile picture of ${username}`}
          width={PROFILE_PICTURE_SIZE}
          height={PROFILE_PICTURE_SIZE}
          src={userProfilePicture}
          className='bg-text-100 rounded-md'
        />
      </Link>
      <div>
        <Heading size='small'>{username}</Heading>
        <div className='flex gap-1 items-center'>
          <FaLocationDot />
          <Paragraph>{locationName}</Paragraph>
        </div>
      </div>
    </div>
  );
}
