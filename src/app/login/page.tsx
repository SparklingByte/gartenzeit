import LoginForm from './login-form';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function redirectLoggedInUser() {
  const session = await getServerSession();

  // Check if a session of a logged in user exists to redirect to homepage
  if (session) {
    redirect('/');
  }
}

export default async function LoginPage() {
  await redirectLoggedInUser();
  return (
    <main>
      <h1>Welcome back to Gartenzeit</h1>
      <h2>Login to your account</h2>
      <LoginForm></LoginForm>
    </main>
  );
}
