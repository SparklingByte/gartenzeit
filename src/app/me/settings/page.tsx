import PageTitle from '@/components/ui/display/PageTitle';
import SectionTitle from '@/components/ui/display/SectionTitle';
import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import { getServerSession } from 'next-auth';
import ChangeEmailForm from './change-email-form';
import { redirect } from 'next/navigation';
import ChangePasswordForm from './change-password-form';
import LogoutButton from './logout-button';
import ChangeDescriptionForm from './change-description-form';
import { prisma } from '@/lib/prismaClient';
import ChangeImageForm from './change-image.form';

async function getUserByEmail(email: string) {
  try {
    const dbQuery = await prisma.user.findUniqueOrThrow({
      where: {
        email,
      },
    });
    return dbQuery;
  } catch {
    return null;
  }
}

export default async function ProfileSettingsPage() {
  const session = await getServerSession();

  const SECTION_CLASSNAME = 'grid gap-5';

  if (!session) {
    return redirect('/login');
  }

  const user = await getUserByEmail(session.user?.email || '');
  if (!user) {
    return redirect('/login');
  }

  return (
    <main className='grid gap-6 p-5'>
      <TopActionMenuBar hasBackItem />
      <PageTitle title='Account settings' />
      <section className={SECTION_CLASSNAME}>
        <SectionTitle title='Change your profile image' />
        <ChangeImageForm></ChangeImageForm>
      </section>
      <section className={SECTION_CLASSNAME}>
        <SectionTitle title='Change your details' />
        <ChangeEmailForm
          userId={user.id}
          oldEmailPlaceholder={user?.email || ''}
        ></ChangeEmailForm>
      </section>
      <section className={SECTION_CLASSNAME}>
        <SectionTitle title='Change your password' />
        <ChangePasswordForm />
      </section>
      <section className={SECTION_CLASSNAME}>
        <SectionTitle title='Change your profile description' />
        <ChangeDescriptionForm
          userId={user.id}
          oldDescriptionPlaceholder={user.description}
        />
      </section>
      <section className={SECTION_CLASSNAME}>
        <SectionTitle title='Other' />
        <LogoutButton />
      </section>
    </main>
  );
}
