import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import PageTitle from '@/components/ui/display/PageTitle';
import AuthorCard from '@/components/ui/display/AuthorCard';
import SectionTitle from '@/components/ui/display/SectionTitle';
import TextCard from '@/components/ui/display/TextCard';
import { prisma } from '@/lib/prismaClient';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import HarvestJoinButton from './harvest-join-button';
import UserCard from '@/components/ui/display/UserCard';
import Link from 'next/link';
import { Paragraph } from '@/components/typography/Typography';
import StatusIndicator from '@/components/ui/display/StatusIndicator';

export default async function HarvestPage({
  params,
}: {
  params: { harvestId: string };
}) {
  const { harvestId } = params;
  console.log(harvestId);

  const session = await getServerSession();

  if (!session?.user?.email) {
    return redirect('/login');
  }

  // Query harvest data from db
  const harvest = await prisma.harvest.findUnique({
    where: {
      id: harvestId,
    },
    include: {
      host: true,
      participations: {
        include: {
          user: true,
        },
      },
    },
  });

  if (!harvest) {
    return redirect('/harvest/not-found');
  }

  // Get user from database
  let user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  if (!user) {
    return redirect('/login');
  }

  const isHost = harvest.host.email === session.user.email;

  const harvestIsAlreadyOver =
    harvest.dateTime.getTime() < new Date().getTime();

  const allConfirmedParticipations = harvest.participations
    .filter((participation) => {
      return participation.status === 'CONFIRMED';
    })
    .map((participation) => {
      const { user } = participation;
      return <UserCard key={user.id} user={user}></UserCard>;
    });

  // Get participation status of logged in user
  const userHarvestParticipationStatus = harvest.participations
    .filter((participation) => {
      return (
        participation.userId === user?.id &&
        participation.harvestId === harvest.id
      );
    })
    .map((participation) => {
      return { status: participation.status };
    })[0];

  return (
    <main className='p-5 grid gap-10'>
      <TopActionMenuBar hasBackItem hasSettingsItem={isHost} />
      <div className='grid gap-5'>
        <PageTitle title={harvest.title} subtitle='Harvest'></PageTitle>
        <Link href={'/user/' + harvest.host.username}>
          <AuthorCard user={harvest.host} isOwnProfile={isHost} />
        </Link>
      </div>
      <section className='grid gap-5'>
        <SectionTitle title='About the harvest' />
        <TextCard
          title='What has to be done?'
          text={harvest.description}
        ></TextCard>
        <TextCard title="What's the reward?" text={harvest.reward}></TextCard>
        <TextCard title="What's harvested?" text={harvest.produce}></TextCard>
      </section>
      <section className='grid gap-5'>
        <SectionTitle title='When and where?'></SectionTitle>
        <TextCard title='Location' text={harvest.location}></TextCard>
        <TextCard
          title='Time and date'
          text={
            harvest.dateTime.toLocaleDateString() +
            ' | ' +
            harvest.dateTime.toLocaleTimeString()
          }
        ></TextCard>
      </section>
      <section className='grid gap-5'>
        <SectionTitle title='Who is going to come?'></SectionTitle>
        {allConfirmedParticipations.length > 0 ? (
          allConfirmedParticipations
        ) : (
          <TextCard
            title='No participants'
            text='No members joined this harvest so far'
          ></TextCard>
        )}
      </section>
      <section className='p-5 bg-background-50 rounded-xl'>
        {harvestIsAlreadyOver ? (
          <span className='text-center'>
            <Paragraph>This harvest is already over</Paragraph>
          </span>
        ) : (
          <div className='grid flex-col align-center w-100 gap-5'>
            {userHarvestParticipationStatus && (
              <StatusIndicator
                text={
                  userHarvestParticipationStatus.status === 'CONFIRMED'
                    ? 'Your participation was confirmed'
                    : userHarvestParticipationStatus.status === 'PENDING'
                    ? 'Your request is pending'
                    : 'Your request was rejected'
                }
                color={
                  userHarvestParticipationStatus.status === 'CONFIRMED'
                    ? 'green'
                    : 'red'
                }
              ></StatusIndicator>
            )}
            <HarvestJoinButton
              harvest={harvest}
              userId={user.id}
              participation={userHarvestParticipationStatus}
            ></HarvestJoinButton>
          </div>
        )}
      </section>
    </main>
  );
}
