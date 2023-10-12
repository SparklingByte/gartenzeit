import LoginForm from './login-form';
import { redirectLoggedInUser } from '@/lib/utils';

export default async function LoginPage() {
  await redirectLoggedInUser('/');
  return (
    <main>
      <h1>Welcome back to Gartenzeit</h1>
      <h2>Login to your account</h2>
      <LoginForm></LoginForm>
    </main>
  );
}
