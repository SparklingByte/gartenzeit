import PageTitle from '@/components/ui/display/PageTitle';
import mockHarvest from '@/app/data/harvest.json';
import HarvestCard from '@/components/ui/harvest/HarvestCard';
import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import { prisma } from '@/lib/prismaClient';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function HostedHarvestsPage() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    return redirect('/login');
  }

  const hostedHarvests = await prisma.harvest.findMany({
    where: {
      host: {
        email: session.user.email,
      },
    },
  });

  return (
    <main className='grid gap-6 p-5'>
      <TopActionMenuBar hasBackItem />
      <PageTitle title='Your created harvests' />
      <div className='grid gap-5'>
        {hostedHarvests.map((harvest) => {
          return (
            <HarvestCard
              key={harvest.id}
              harvest={harvest}
              isOwner={true}
            ></HarvestCard>
          );
        })}
      </div>
    </main>
  );
}
