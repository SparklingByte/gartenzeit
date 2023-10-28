import Link from 'next/link';
import Image from 'next/image';

type UserWelcomeCardProps = {
  username: string;
  userProfilePicture?: string;
  onProfilePicClick: () => undefined;
};

const IMAGE_SIZE = 55;

export default function UserWelcomeCard({
  username,
  userProfilePicture,
  onProfilePicClick,
}: UserWelcomeCardProps) {
  return (
    <div className='flex justify-between items-center bg-background-50 text-text-100 rounded-xl p-5'>
      <div>
        <h1 className='text-2xl font-bold'>Welcome</h1>
        <h2 className='text-xl'>{username || 'Unknown User'}</h2>
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
