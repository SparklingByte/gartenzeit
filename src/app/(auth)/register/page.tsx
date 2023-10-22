import UserRegistrationForm from './registrationForm';
import { redirectLoggedInUser } from '@/lib/utils';

export default async function UserRegistrationPage() {
  await redirectLoggedInUser('/');
  return (
    <main className='h-screen flex justify-center items-center'>
      <div className='grid gap-5 bg-orange-100 p-5 rounded-lg w-80 mb-3'>
        <div>
          <h1 className='text-2xl text-center font-bold '>
            Join Gartenzeit today
          </h1>
          <h2 className='text-xl text-center'>Create a new account</h2>
        </div>
        <UserRegistrationForm></UserRegistrationForm>
      </div>
    </main>
  );
}
