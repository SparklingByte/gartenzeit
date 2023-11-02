'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import user from './data/user.json';
import harvest from './data/harvest.json';
import UserWelcomeCard from '@/components/ui/display/UserWelcomeCard';
import SectionTitle from '@/components/ui/display/SectionTitle';
import HarvestCard from '@/components/ui/harvest/HarvestCard';

const harvests = [harvest, harvest, harvest];

export default function Home() {
  const { data: session, status } = useSession();
  const username = session?.user?.email || user.username;

  return (
    <main className='p-5 gap-[40px]'>
      <section className='mb-10'>
        <UserWelcomeCard
          username={user.username}
          userProfilePicture={user.image}
          onProfilePicClick={() => {}}
        />
      </section>
      <section className='grid gap-5'>
        <SectionTitle
          title='Your joined harvests'
          linkText='Show all'
        />
        <div className='grid grid-cols-1 gap-5'>
          {harvests.map((harvest) => {
            return (
              <HarvestCard
                key={harvest.id}
                title={harvest.title}
                vegetables={harvest.vegetables}
                locationName={harvest.location}
                date={harvest.location}
                time={harvest.time}
                userParticipationStatus={'confirmed'}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
