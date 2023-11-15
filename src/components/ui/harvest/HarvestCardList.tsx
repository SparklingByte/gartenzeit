'use client';

import HarvestCard from './HarvestCard';
import SectionTitle from '../display/SectionTitle';
import CalloutBox from '../display/CalloutBox';
import Button from '../../buttons/Button';

type HarvestCardListProps = {
  title: string;
  onShowAll?: () => void;
  noEntriesTitle: string;
  noEntriesDescription: string;
  noEntriesButtonText: string;
  noEntriesButtonAction: () => void;
  harvestPosts: React.ComponentProps<typeof HarvestCard>[];
};

export default function HarvestCardList({
  title,
  onShowAll,
  noEntriesTitle,
  noEntriesDescription,
  noEntriesButtonText,
  noEntriesButtonAction,
  harvestPosts,
}: HarvestCardListProps) {
  return (
    <div className='grid gap-5'>
      <SectionTitle
        title={title}
        linkText={harvestPosts.length > 0 ? 'Show all' : undefined}
        onOpen={onShowAll}
      />
      {harvestPosts.length > 0 ? (
        harvestPosts.map((post) => {
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
      ) : (
        <CalloutBox
          title={noEntriesTitle}
          description={noEntriesDescription}
        >
          <Button
            showIcon={false}
            text={noEntriesButtonText}
            onClick={noEntriesButtonAction}
          />
        </CalloutBox>
      )}
    </div>
  );
}
