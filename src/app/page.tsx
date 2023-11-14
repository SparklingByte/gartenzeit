'use client';

import user from './data/user.json';
import harvest from './data/harvest.json';
import UserWelcomeCard from '@/components/ui/display/UserWelcomeCard';
import HarvestCardList from '@/components/ui/harvest/HarvestCardList';

const joinedHarvests = [harvest, harvest, harvest];
const hostedHarvests = [harvest, harvest, harvest];

export default function Home() {
  return (
    <main className='p-5 gap-[40px]'>
      <section className='mb-10'>
        <UserWelcomeCard
          username={user.username}
          userProfilePicture={user.image}
          onProfilePicClick={() => {}}
        />
      </section>
      <section className='grid gap-[40px]'>
        <HarvestCardList
          harvestPosts={joinedHarvests}
          title='Your joined harvests'
          onShowAll={() => {}}
          noEntriesTitle='Nothing to show'
          noEntriesDescription="You haven't joined any harvests yet."
          noEntriesButtonText='Discover harvests'
          noEntriesButtonAction={() => {}}
        ></HarvestCardList>
        <HarvestCardList
          harvestPosts={hostedHarvests}
          title='Your hosted harvests'
          onShowAll={() => {}}
          noEntriesTitle='Nothing to show'
          noEntriesDescription="You haven't created any harvests yet."
          noEntriesButtonText='Create a harvest'
          noEntriesButtonAction={() => {}}
        ></HarvestCardList>
      </section>
    </main>
  );
}
