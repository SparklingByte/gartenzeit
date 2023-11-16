import Image from 'next/image';
import Link from 'next/link';

type AuthorCardProps = {
  username: string;
  userProfilePicture: string;
};

const IMAGE_SIZE = 25;

export default function AuthorCard({
  username,
  userProfilePicture,
}: AuthorCardProps) {
  return (
    <Link href={'/user/' + username}>
      <div className='flex gap-3 items-center'>
        <Image
          src={userProfilePicture}
          alt={`Profile picture of ${username}`}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          className='bg-text-100 rounded-md'
        ></Image>
        <p>Created by {username}</p>
      </div>
    </Link>
  );
}
