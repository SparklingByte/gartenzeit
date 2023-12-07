import { PublicUserDataSchema } from '@/lib/schemas';
import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';

type AuthorCardProps = {
  user: z.infer<typeof PublicUserDataSchema>;
};

const IMAGE_SIZE = 25;

export default function AuthorCard({ user }: AuthorCardProps) {
  return (
    <Link href={'/user/' + user.username}>
      <div className='flex gap-3 items-center'>
        <Image
          src={user.image || ''} // TODO Replace with placeholder image
          alt={`Profile picture of ${user.username}`}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          className='bg-text-100 rounded-md'
        ></Image>
        <p>Hosted by {user.username}</p>
      </div>
    </Link>
  );
}
