'use client';

import PageTitle from '@/components/ui/display/PageTitle';
import SectionTitle from '@/components/ui/display/SectionTitle';
import TopActionMenuBar from '@/components/ui/navigation/TopActionMenuBar';
import InputField from '@/components/form/input/InputField';
import mockUser from '@/app/data/user.json';
import { useState } from 'react';
import Button from '@/components/buttons/Button';

export default function ProfileSettingsPage() {
  // TODO Fetch real user data of logged in user
  const user = mockUser;

  const [newEmail, setNewEmail] = useState<string>(user.email);
  const [oldPassword, setOldPassword] = useState<string>();
  const [newPassword, setNewPassword] = useState<string>();

  function handleEmailChange() {
    // TODO send server request to change email of user
  }

  function handlePasswordChange() {
    // TODO send server request to change password of user
  }

  return (
    <main className='grid gap-6 p-5'>
      <TopActionMenuBar hasBackItem />
      <PageTitle title='Account settings' />
      <section className='grid gap-5'>
        <SectionTitle title='Change your details' />
        <InputField
          color='base'
          label='Your Email'
          value={newEmail}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
        />
        <Button
          showIcon={false}
          text='Save'
          onClick={handleEmailChange}
        />
      </section>
      <section className='grid gap-5'>
        <SectionTitle title='Change your password' />
        <InputField
          color='base'
          label='Your current password'
          value={oldPassword}
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
        />
        <InputField
          color='base'
          label='Your new password'
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
        <Button
          showIcon={false}
          text='Save'
          onClick={handlePasswordChange}
        />
      </section>
    </main>
  );
}
