import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prismaClient';
import { redirect } from 'next/navigation';
import UserProfileLayout from '@/components/layout/user/UserProfileLayout';

export default async function MyProfilePage() {
  const PROFILE_IMAGE_SIZE = 200;
  const session = await getServerSession();

  const userData = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || '',
    },
  });

  // If fetch from database failed, redirect to login
  if (!userData) {
    return redirect('/login');
  }

  return (
    <UserProfileLayout user={userData} isOwnProfile={true}></UserProfileLayout>
  );
}
