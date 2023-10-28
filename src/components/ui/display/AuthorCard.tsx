import Image from 'next/image';

type AuthorCardProps = {
  username: string;
  userProfilePicture: string;
};

export default function AuthorCard({
  username,
  userProfilePicture,
}: AuthorCardProps) {
  return (
    <div className='flex gap-3 items-center'>
      <Image
        src={userProfilePicture}
        alt={`Profile picture of ${username}`}
        width={25}
        height={25}
        className='bg-text-100 rounded-md'
      ></Image>
      <p>Created by {username}</p>
    </div>
  );
}
