import PageTitle from '@/components/ui/display/PageTitle';
import SectionTitle from '@/components/ui/display/SectionTitle';
import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import InputField from '@/components/form/input/InputField';
import Button from '@/components/buttons/Button';
import { getServerSession } from 'next-auth';
import ChangeEmailForm from './change-email-form';
import { redirect } from 'next/navigation';
import ChangePasswordForm from './change-password-form';

export default async function ProfileSettingsPage() {
  const session = await getServerSession();

  if (!session) {
    return redirect('/login');
  }

  const { user } = session;

  return (
    <main className='grid gap-6 p-5'>
      <TopActionMenuBar hasBackItem />
      <PageTitle title='Account settings' />
      <section className='grid gap-5'>
        <SectionTitle title='Change your details' />
        <ChangeEmailForm
          oldEmailPlaceholder={user?.email || ''}
        ></ChangeEmailForm>
      </section>
      <section className='grid gap-5'>
        <SectionTitle title='Change your password' />
        <ChangePasswordForm />
      </section>
    </main>
  );
}
