import LoginForm from './login-form';
import { redirectLoggedInUser } from '@/lib/utils';

export default async function LoginPage() {
  await redirectLoggedInUser('/');
  return (
    <main className='h-screen flex justify-center items-center'>
      <div className='bg-orange-100 p-5 rounded-lg w-80'>
        <div className='mb-5'>
          <h1 className='text-2xl font-bold text-center'>
            Welcome back to Gartenzeit
          </h1>
          <h2 className='text-xl text-center'>Login to your account</h2>
        </div>
        <LoginForm></LoginForm>
      </div>
    </main>
  );
}
