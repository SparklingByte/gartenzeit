import UserRegistrationForm from './registrationForm';
import PageTitle from '@/components/ui/display/PageTitle';
import { redirectLoggedInUser } from '@/lib/utils';

export default async function UserRegistrationPage() {
  await redirectLoggedInUser('/');
  return (
    <main className='h-screen flex justify-center items-center p-5'>
      <div className='w-50'>
        <div className='text-center mb-10'>
          <PageTitle title={'Join Gartenzeit today'} />
        </div>
        <UserRegistrationForm />
      </div>
    </main>
  );
}
