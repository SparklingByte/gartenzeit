import PageTitle from '@/components/ui/display/PageTitle';
import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import user from '../data/user.json';
import UserCard from '@/components/ui/display/UserCard';
import TextCard from '@/components/ui/display/TextCard';
import Button from '@/components/buttons/Button';

export default function MyProfilePage() {
  const PROFILE_IMAGE_SIZE = 200;

  return (
    <main className='grid gap-10 p-5'>
      <TopActionMenuBar
        hasBackItem
        hasSettingsItem
      />
      <div className='grid gap-6'>
        <PageTitle title='Your profile' />
        <div className='grid gap-5'>
          <UserCard
            username={user.username}
            locationName={user.location}
            userProfilePicture={user.image}
          />
          <TextCard
            title='About me'
            text={user.about}
          >
            <div className='mt-8'>
              <Button
                text='Edit info'
                showIcon={false}
              />
            </div>
          </TextCard>
        </div>
      </div>
    </main>
  );
}
