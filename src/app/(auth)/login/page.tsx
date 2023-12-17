import PageTitle from '@/components/ui/display/PageTitle';
import LoginForm from './login-form';
import { redirectLoggedInUser } from '@/lib/utils';
import Link from 'next/link';
import { Paragraph } from '@/components/typography/Typography';

export default async function LoginPage() {
  await redirectLoggedInUser('/');
  return (
    <main className='h-screen flex justify-center items-center p-5'>
      <div className='w-96'>
        <div className='text-center mb-10'>
          <PageTitle title={'Welcome Back To Gartenzeit'} />
        </div>
        <div className='text-center mb-10'>
          <Paragraph>
            Need a new Account?{' '}
            <Link className='font-accent text-primary-120' href={'/register'}>
              Join
            </Link>
          </Paragraph>
        </div>
        <LoginForm></LoginForm>
      </div>
    </main>
  );
}
