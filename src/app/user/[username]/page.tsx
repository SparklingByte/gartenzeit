import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prismaClient';
import { redirect } from 'next/navigation';
import UserProfileLayout from '@/components/layout/user/UserProfileLayout';
export default async function UserPage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const session = await getServerSession();

  const userData = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  // If user not found in database, redirect to error page
  if (!userData) {
    return redirect('/user/not-found');
  }

  // If opens own profile, redirect to /me
  const isOwnProfile = session?.user?.email === userData.email;

  if (isOwnProfile) {
    return redirect('/me');
  }

  return (
    <UserProfileLayout user={userData} isOwnProfile={false}></UserProfileLayout>
  );
}
