import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import mockUser from '@/app/data/user.json';
import mockHarvest from '@/app/data/harvest.json';
import PageTitle from '@/components/ui/display/PageTitle';
import SectionTitle from '@/components/ui/display/SectionTitle';
import UserCard from '@/components/ui/display/UserCard';
import InputField from '@/components/form/input/InputField';

export default function HarvestSettingsPage() {
  // TODO Replace with data fetch
  const user = mockUser;
  const harvest = mockHarvest;

  // TODO Replace with data fetch
  const joinedUsers = [user, user, user];

  // Check if harvest exists
  if (!harvest) {
    return (
      <main className='flex justify-center items-center h-screen'>
        <div>
          <PageTitle
            title='This harvest was not found'
            subtitle='It might have been deleted.'
          />
        </div>
      </main>
    );
  }

  // Check if user is harvest owner
  if (user.id !== harvest.host.id) {
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
        {joinedUsers.map((user) => {
          return (
            <UserCard
              key={user.id}
              username={user.username}
              locationName={user.location}
              userProfilePicture={user.image}
            />
          );
        })}
      </section>
    </main>
  );
}
