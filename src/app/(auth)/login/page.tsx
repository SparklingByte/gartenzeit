import PageTitle from '@/components/ui/display/PageTitle';
import LoginForm from './login-form';
import { redirectLoggedInUser } from '@/lib/utils';

export default async function LoginPage() {
  await redirectLoggedInUser('/');
  return (
    <main className='h-screen flex justify-center items-center p-5'>
      <div>
        <div className='text-center mb-10'>
          <PageTitle title={'Welcome Back To Gartenzeit'} />
        </div>
        <LoginForm></LoginForm>
      </div>
    </main>
  );
}
