import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import PageTitle from '@/components/ui/display/PageTitle';
import AuthorCard from '@/components/ui/display/AuthorCard';
import SectionTitle from '@/components/ui/display/SectionTitle';
import TextCard from '@/components/ui/display/TextCard';
import { prisma } from '@/lib/prismaClient';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import HarvestJoinButton from './harvest-join-button';

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
  let harvest;
  try {
    harvest = await prisma.harvest.findUniqueOrThrow({
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
  } catch {
    return redirect('/harvest/not-found');
  }

  let user;

  try {
    user = await prisma.user.findUniqueOrThrow({
      where: {
        email: session?.user?.email,
      },
    });
  } catch {
    console.warn('User data not found. (Harvest page)');
    return redirect('/');
  }

  const isHost = harvest.host.email === session.user.email;
  let userParticipation;
  let hasJoined: boolean = false;

  if (!isHost) {
    userParticipation = harvest.participations.find((participation) => {
      return participation.user.email === session.user?.email;
    });
    hasJoined = userParticipation !== undefined;
  }

  return (
    <main className='p-5 grid gap-10'>
      <TopActionMenuBar hasBackItem hasSettingsItem={isHost} />
      <div className='grid gap-5'>
        <PageTitle title={harvest.title} subtitle='Harvest'></PageTitle>
        <AuthorCard
          username={harvest.host.username}
          userProfilePicture={harvest.host.image || ''}
        />
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
        <SectionTitle
          title='When and where?'
          helperText="You'll see the full location once your participation was confirmed."
        ></SectionTitle>
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
      <section className='grid p-5 bg-background-50 rounded-xl'>
        <HarvestJoinButton
          harvestId={harvestId}
          isHost={isHost}
          hasJoined={hasJoined}
          participationStatus={userParticipation?.status}
        ></HarvestJoinButton>
      </section>
    </main>
  );
}
