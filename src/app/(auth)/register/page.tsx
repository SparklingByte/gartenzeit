import { Paragraph } from '@/components/typography/Typography';
import UserRegistrationForm from './registrationForm';
import PageTitle from '@/components/ui/display/PageTitle';
import { redirectLoggedInUser } from '@/lib/utils';
import Link from 'next/link';

export default async function UserRegistrationPage() {
  await redirectLoggedInUser('/');
  return (
    <main className='h-screen flex justify-center items-center p-5'>
      <div className='w-96'>
        <div className='text-center mb-10'>
          <PageTitle title={'Join Gartenzeit today'} />
        </div>
        <div className='text-center mb-10'>
          <Paragraph>
            Already have an account?{' '}
            <Link className='font-accent text-primary-120' href={'/login'}>
              Login
            </Link>
          </Paragraph>
        </div>
        <UserRegistrationForm />
      </div>
    </main>
  );
}
