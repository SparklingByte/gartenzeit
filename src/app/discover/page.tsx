import PageTitle from '@/components/ui/display/PageTitle';
import mockHarvest from '@/app/data/harvest.json';
import HarvestCard from '@/components/ui/harvest/HarvestCard';

export default function DiscoverPage() {
  // TODO Replace with data fetch
  const harvests = [mockHarvest, mockHarvest, mockHarvest];

  return (
    <main className='grid gap-6 p-5'>
      <PageTitle title='Discover harvests' />
      <div className='grid gap-5'>
        {harvests.map((harvest) => {
          return (
            <HarvestCard
              key={harvest.id}
              title={harvest.title}
              date={harvest.date}
              locationName={harvest.locationName}
              time={harvest.time}
              userParticipationStatus={harvest.userParticipationStatus}
              vegetables={harvest.vegetables}
            ></HarvestCard>
          );
        })}
      </div>
    </main>
  );
}
