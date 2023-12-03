import PageTitle from '@/components/ui/display/PageTitle';
import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import UserCard from '@/components/ui/display/UserCard';
import TextCard from '@/components/ui/display/TextCard';
import Button from '@/components/buttons/Button';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prismaClient';
import { redirect } from 'next/navigation';
import chalk from 'chalk';

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
    console.log(
      chalk.bgRed(
        'Error while getting user information for profile page. Redirecting user to login page.'
      )
    );
    return redirect('/login');
  }

  return (
    <main className='grid gap-10 p-5'>
      <TopActionMenuBar hasBackItem hasSettingsItem />
      <div className='grid gap-6'>
        <PageTitle title='Your profile' />
        <div className='grid gap-5'>
          <UserCard
            username={userData.username}
            locationName={userData.location || 'Unknown Location'}
            userProfilePicture={userData.image || ''}
          />
          <TextCard
            title='About me'
            text={userData.description || 'No description yet'}
          >
            <div className='mt-8'>
              <Button text='Edit info' showIcon={false} />
            </div>
          </TextCard>
        </div>
      </div>
    </main>
  );
}
