import Chip from '@/components/ui/display/Chip';
import PageTitle from '@/components/ui/display/PageTitle';
import TextCard from '@/components/ui/display/TextCard';
import UserCard from '@/components/ui/display/UserCard';
import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import { PublicUserDataSchema } from '@/lib/schemas';
import { z } from 'zod';

type UserProfileLayoutProps = {
  user: z.infer<typeof PublicUserDataSchema>;
  isOwnProfile: boolean;
};

export default function UserProfileLayout({
  user,
  isOwnProfile,
}: UserProfileLayoutProps) {
  return (
    <main className='grid gap-10 p-5'>
      <TopActionMenuBar hasBackItem hasSettingsItem={isOwnProfile} />
      <div className='grid gap-6'>
        <div className='flex items-center gap-5'>
          <PageTitle title={'Profile'} />
          {isOwnProfile && (
            <Chip text='Your profile' color='primary'></Chip>
          )}
        </div>
        <div className='grid gap-5'>
          <UserCard
            username={user.username}
            locationName={user.location || 'Unknown Location'}
            userProfilePicture={user.image || ''}
          />
          <TextCard
            title='About me'
            text={user.description || 'No description yet'}
          ></TextCard>
        </div>
      </div>
    </main>
  );
}
