
import UserRegistrationForm from './registrationForm';
import { redirectLoggedInUser } from '@/lib/utils';

export default async function UserRegistrationPage() {
  await redirectLoggedInUser('/');
  return (
    <main>
      <h1>Join Gartenzeit today</h1>
      <h2>Create a new account</h2>
      <UserRegistrationForm></UserRegistrationForm>
    </main>
  );
}
