import Image from 'next/image';
import { Heading, Subheading } from '../../typography/Typography';

type UserWelcomeCardProps = {
  username: string;
  userProfilePicture?: string;
  onProfilePicClick: () => undefined;
};

const IMAGE_SIZE = 80;

export default function UserWelcomeCard({
  username,
  userProfilePicture,
  onProfilePicClick,
}: UserWelcomeCardProps) {
  return (
    <div className='flex justify-between items-center bg-background-50 text-text-100 rounded-xl p-5'>
      <div>
        <Heading size='big'>Welcome</Heading>
        <Subheading size='big'>{username || 'Unkown User'}</Subheading>
      </div>
      <Image
        src={userProfilePicture || ''} // TODO Add fallback profile picture
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        alt={`Profile picture from ${username}`}
        className='rounded-xl cursor-pointer bg-background-100'
        onClick={onProfilePicClick}
      ></Image>
    </div>
  );
}
