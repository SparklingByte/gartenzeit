import UserWelcomeCard from '@/components/ui/display/UserWelcomeCard';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prismaClient';
import SectionTitle from '@/components/ui/display/SectionTitle';
import HarvestCard from '@/components/ui/harvest/HarvestCard';
import CalloutBox from '@/components/ui/display/CalloutBox';
import Button from '@/components/buttons/Button';
import Link from 'next/link';

async function getJoinedUserHarvests(userEmail: string) {
  // Query harvest data and status of participation of user (is not equal to harvest!)
  const harvestsWithParticipationStatus =
    await prisma.userHarvestParticipation.findMany({
      where: {
        user: {
          email: userEmail,
        },
      },
      include: {
        harvest: {
          include: {
            host: true,
          },
        },
      },
    });

  return harvestsWithParticipationStatus;
}

async function getHostedHarvests(userEmail: string) {
  const harvests = await prisma.harvest.findMany({
    where: {
      host: {
        email: userEmail,
      },
    },
    include: {
      host: true,
    },
  });

  return harvests;
}

export default async function Home() {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return redirect('/login');
  }

  const userData = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const joinedHarvestsWithParticipationStatus = await getJoinedUserHarvests(
    session.user.email
  );

  const joinedHarvestsContent = (
    <>
      <SectionTitle
        title='Harvests you joined'
        linkPathname='/me/harvests/joined'
        linkText={
          joinedHarvestsWithParticipationStatus.length > 3
            ? 'Show all'
            : undefined
        }
      />
      {joinedHarvestsWithParticipationStatus.length > 0 ? (
        joinedHarvestsWithParticipationStatus
          .filter((_, index) => {
            return index < 3;
          })
          .map((entry) => {
            return (
              <HarvestCard
                key={entry.harvest.id}
                host={entry.harvest.host}
                harvest={entry.harvest}
                participationStatus={entry.status}
                isHost={false}
              />
            );
          })
      ) : (
        <CalloutBox
          title='No harvests to display'
          description='You have not joined any harvests yet.'
        >
          <Link href={'/discover'}>
            <Button showIcon={false} text='Discover some' />
          </Link>
        </CalloutBox>
      )}{' '}
    </>
  );

  const hostedHarvests = await getHostedHarvests(session.user.email);
  const hostedHarvestsContent = (
    <>
      <SectionTitle
        title='Harvests you host'
        linkPathname='/me/harvests/hosted'
        linkText={hostedHarvests.length > 3 ? 'Show all' : undefined}
      />
      {hostedHarvests.length > 0 ? (
        hostedHarvests
          .filter((_, index) => {
            return index < 3;
          })
          .map((harvest) => {
            return (
              <HarvestCard
                harvest={harvest}
                key={harvest.id}
                host={harvest.host}
                isHost={true}
              />
            );
          })
      ) : (
        <CalloutBox
          title='No harvests to display'
          description='You have not hosted any harvests yet.'
        >
          <Link href={'/harvest/create'}>
            <Button showIcon={false} text='Create a harvest' />
          </Link>
        </CalloutBox>
      )}{' '}
    </>
  );

  return (
    <main className='p-5 gap-10'>
      <section className='mb-10'>
        <UserWelcomeCard
          username={userData?.username || 'Unknown User'}
          // TODO Replace with placeholder image
          userProfileImage={userData?.image || ''}
        />
      </section>
      <section className='grid gap-5 mb-10'>{joinedHarvestsContent}</section>
      <section className='grid gap-5'>{hostedHarvestsContent}</section>
    </main>
  );
}
