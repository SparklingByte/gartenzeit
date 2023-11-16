'use client';

import user from './data/user.json';
import harvest from './data/harvest.json';
import UserWelcomeCard from '@/components/ui/display/UserWelcomeCard';
import HarvestCardList from '@/components/ui/harvest/HarvestCardList';

// Mock data
const joinedHarvests = [harvest, harvest, harvest];
const hostedHarvests = [harvest, harvest, harvest];

export default function Home() {
  function handleShowAllJoinedHarvests() {}

  return (
    <main className='p-5 gap-[40px]'>
      <section className='mb-10'>
        <UserWelcomeCard
          username={user.username}
          userProfileImage={user.image}
        />
      </section>
      <section className='grid gap-[40px]'>
        <HarvestCardList
          harvestPosts={joinedHarvests}
          title='Your joined harvests'
          showAllPathname='/me/harvests/joined'
          noEntriesTitle='Nothing to show'
          noEntriesDescription="You haven't joined any harvests yet."
          noEntriesButtonText='Discover harvests'
          calloutButtonPathname='/discover'
        ></HarvestCardList>
        <HarvestCardList
          harvestPosts={[]}
          title='Your created harvests'
          showAllPathname='/me/harvests/created'
          noEntriesTitle='Nothing to show'
          noEntriesDescription="You haven't created any harvests yet."
          noEntriesButtonText='Create a harvest'
          calloutButtonPathname='/harvest/create'
        ></HarvestCardList>
      </section>
    </main>
  );
}
