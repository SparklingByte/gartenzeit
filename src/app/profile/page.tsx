import { getServerSession } from 'next-auth';

export default async function ProfilePage() {
  const session = await getServerSession();

  const email = session?.user?.email || 'No logged in user';

  return (
    <main>
      <h1>Your email</h1>
      <p>{email}</p>
    </main>
  );
}
