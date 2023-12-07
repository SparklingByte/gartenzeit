import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import PageTitle from '@/components/ui/display/PageTitle';
import SectionTitle from '@/components/ui/display/SectionTitle';
import UserCard from '@/components/ui/display/UserCard';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prismaClient';
import { redirect } from 'next/navigation';
import { Paragraph } from '@/components/typography/Typography';
import DeleteHarvestButton from './delete-harvest-button';

export default async function HarvestSettingsPage({
  params,
}: {
  params: { harvestId: string };
}) {
  const { harvestId } = params;
  const session = await getServerSession();
  let harvest;

  try {
    harvest = await prisma.harvest.findUniqueOrThrow({
      where: {
        id: harvestId,
      },
      include: {
        participations: {
          include: {
            user: true,
          },
        },
        host: true,
      },
    });
  } catch {
    return redirect('/harvest/not-found');
  }

  const participations = harvest.participations;

  // Check if user is harvest owner
  if (harvest.host.email !== session?.user?.email) {
    return (
      <main className='flex justify-center items-center h-screen'>
        <div>
          <PageTitle
            title='No access'
            subtitle='You have no access to the harvest settings unless you are the host.'
          />
        </div>
      </main>
    );
  }

  return (
    <main className='grid gap-6 p-5'>
      <TopActionMenuBar hasBackItem />
      <section className='grid gap-5'>
        <SectionTitle
          title='Participants'
          helperText='Check who is going to join your harvest'
        />
        {participations.length < 1 && (
          <Paragraph>There are no participants yet.</Paragraph>
        )}
        {participations.map(({ user }) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </section>
      <section className='grid gap-5'>
        <SectionTitle title='Manage the harvest'></SectionTitle>
        <DeleteHarvestButton harvestId={harvest.id}></DeleteHarvestButton>
      </section>
    </main>
  );
}
