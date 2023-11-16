'use client';

import HarvestCard from './HarvestCard';
import SectionTitle from '../display/SectionTitle';
import CalloutBox from '../display/CalloutBox';
import Button from '../../buttons/Button';
import Link from 'next/link';

type HarvestCardListProps = {
  title: string;
  showAllPathname?: string;
  noEntriesTitle: string;
  noEntriesDescription: string;
  noEntriesButtonText: string;
  calloutButtonPathname: string;
  harvestPosts: React.ComponentProps<typeof HarvestCard>[];
};

export default function HarvestCardList({
  title,
  showAllPathname,
  noEntriesTitle,
  noEntriesDescription,
  noEntriesButtonText,
  calloutButtonPathname,
  harvestPosts,
}: HarvestCardListProps) {
  return (
    <div className='grid gap-5'>
      <SectionTitle
        title={title}
        linkText={harvestPosts.length > 0 ? 'Show all' : undefined}
        linkPathname={showAllPathname}
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
        <CalloutBox title={noEntriesTitle} description={noEntriesDescription}>
          <Link href={calloutButtonPathname}>
            <Button showIcon={false} text={noEntriesButtonText} />
          </Link>
        </CalloutBox>
      )}
    </div>
  );
}
