import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import PageTitle from '@/components/ui/display/PageTitle';
import harvest from '@/app/data/harvest.json';
import user from '@/app/data/user.json';
import AuthorCard from '@/components/ui/display/AuthorCard';
import SectionTitle from '@/components/ui/display/SectionTitle';
import TextCard from '@/components/ui/display/TextCard';
import Button from '@/components/buttons/Button';

export default function HarvestPage() {
  const isOwner = user.id === harvest.host.id;
  const hasJoined = harvest.joinedUsers.find((id) => {
    return id === user.id;
  });

  return (
    <main className='p-5 grid gap-10'>
      <TopActionMenuBar
        hasBackItem
        hasSettingsItem={isOwner}
      />
      <div className='grid gap-5'>
        <PageTitle
          title={harvest.title}
          subtitle='Harvest'
        ></PageTitle>
        <AuthorCard
          username={user.username}
          userProfilePicture={user.image}
        />
      </div>
      <section className='grid gap-5'>
        <SectionTitle title='About the harvest' />
        <TextCard
          title='What has to be done?'
          text={harvest.description}
        ></TextCard>
        <TextCard
          title="What's the reward?"
          text={harvest.reward}
        ></TextCard>
        <TextCard
          title="What's harvested?"
          text={harvest.vegetables.join(', ')}
        ></TextCard>
      </section>
      <section className='grid gap-5'>
        <SectionTitle
          title='When and where?'
          helperText="You'll see the full location once your participation was confirmed."
        ></SectionTitle>
        <TextCard
          title='Location'
          text={harvest.locationName}
        ></TextCard>
        <TextCard
          title='Time and date'
          text={harvest.date + ' | ' + harvest.time}
        ></TextCard>
      </section>
      <section className='grid p-5 bg-background-50 rounded-xl'>
        <Button
          text={
            isOwner
              ? 'Cannot join your own harvest'
              : hasJoined
              ? 'Leave the harvest'
              : 'Join the harvest'
          }
          disabled={isOwner}
          color={hasJoined ? 'dark' : 'light'}
          showIcon={false}
        ></Button>
      </section>
    </main>
  );
}
