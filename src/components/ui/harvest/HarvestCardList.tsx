import HarvestCard from './HarvestCard';
import SectionTitle from '../display/SectionTitle';

type HarvestCardListProps = {
  title: string;
  onShowAll?: () => void;
  harvestPosts: React.ComponentProps<typeof HarvestCard>[];
};

export default function HarvestCardList({
  title,
  onShowAll,
  harvestPosts,
}: HarvestCardListProps) {
  return (
    <section>
      <SectionTitle
        title={title}
        linkText={harvestPosts.length > 0 ? 'Show all' : undefined}
        onOpen={onShowAll}
      />
      <div className='grid gap-5 mt-10'>
        {harvestPosts.length > 0
          ? harvestPosts.map((post) => {
              return (
                <HarvestCard
                  key={post.title}
                  title={post.title}
                  date={post.date}
                  time={post.time}
                  locationName={post.locationName}
                  userParticipationStatus={post.userParticipationStatus}
                  vegetables={post.vegetables}
                />
              );
            })
          : ''}
      </div>
    </section>
  );
}
