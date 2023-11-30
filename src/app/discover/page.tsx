import PageTitle from '@/components/ui/display/PageTitle';
import { prisma } from '@/lib/prismaClient';
import HarvestCard from '@/components/ui/harvest/HarvestCard';
import { getToken } from 'next-auth/jwt';
import { getServerSession } from 'next-auth';
import CalloutBox from '@/components/ui/display/CalloutBox';

export default async function DiscoverPage() {
  // TODO Change to not fetch ALL harvests from the database (pagination?)
  const session = await getServerSession();

  // If no user is logged in, show all harvest
  const userEmail = session?.user?.email || '';

  // Query all harvests that the user is not hosting or participating in
  const harvests = await prisma.harvest.findMany({
    where: {
      NOT: {
        OR: [
          {
            host: {
              email: userEmail,
            },
          },
          {
            participations: {
              some: {
                user: {
                  email: userEmail,
                },
              },
            },
          },
        ],
      },
    },
  });

  return (
    <main className='grid gap-6 p-5'>
      <PageTitle title='Discover all harvests of the community' />
      <div className='grid gap-5'>
        {harvests.length === 0 && (
          <CalloutBox
            title='No harvests available'
            description='There are currently no harvests available that you have not joined yet. Come back later so see if another member has created a harvest.'
          ></CalloutBox>
        )}
        {harvests.map((harvest) => {
          return <HarvestCard key={harvest.id} harvest={harvest}></HarvestCard>;
        })}
      </div>
    </main>
  );
}
