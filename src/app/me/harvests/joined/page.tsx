import PageTitle from '@/components/ui/display/PageTitle';
import HarvestCard from '@/components/ui/harvest/HarvestCard';
import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prismaClient';
import { redirect } from 'next/navigation';

export default async function JoinedHarvestsPage() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    return redirect('/login');
  }

  const participations = await prisma.userHarvestParticipations.findMany({
    where: {
      user: {
        email: session.user.email,
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

  return (
    <main className='grid gap-6 p-5'>
      <TopActionMenuBar hasBackItem />
      <PageTitle title='Your joined harvests' />
      <div className='grid gap-5'>
        {participations.map((participation) => {
          return (
            <HarvestCard
              key={participation.harvest.id}
              participationStatus={participation.status}
              harvest={participation.harvest}
              isOwner={false}
              host={participation.harvest.host}
            ></HarvestCard>
          );
        })}
      </div>
    </main>
  );
}
