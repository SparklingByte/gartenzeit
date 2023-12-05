'use client';

import { useState } from 'react';
import InputField from '@/components/form/input/InputField';
import Button from '@/components/buttons/Button';
import { UserEmail } from '@/lib/schemas';
import AlertBox from '@/components/ui/display/AlertBox';
import { Paragraph } from '@/components/typography/Typography';
import { PiWarningFill } from 'react-icons/pi';
import { signOut } from 'next-auth/react';

export default function ChangeEmailForm({
  userId,
  oldEmailPlaceholder,
}: {
  userId: string;
  oldEmailPlaceholder: string;
}) {
  const [newEmail, setNewEmail] = useState(oldEmailPlaceholder);
  const [inputError, setInputError] = useState<string>();
  const [alert, setAlert] = useState<{
    title: string;
    status: 'success' | 'error';
    message: string;
  }>();

  async function handleEmailChange() {
    // Reset error & parse data
    setAlert(undefined);
    setInputError(undefined);
    const parsedData = UserEmail.safeParse(newEmail);

    if (parsedData.success === false) {
      setInputError(parsedData.error.format()._errors[0]);
      return;
    }

    // Call API to change email
    const res = await fetch(`/api/user/${userId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        newEmail,
      }),
    });

    const resBody = await res.json();

    if (!res.ok) {
      setAlert({ title: 'Error', status: 'error', message: resBody.message });
      return;
    }

    setAlert({
      title: 'Saved',
      status: 'success',
      message: 'Your email was successfully updated.',
    });

    // Let user login again
    setTimeout(() => {
      signOut();
    }, 2000);
  }

  return (
    <>
      {alert && (
        <AlertBox
          title={alert.title}
          message={alert.message}
          status={alert.status}
        />
      )}
      <InputField
        color='base'
        label='Your Email'
        value={newEmail}
        onChange={(e) => {
          setNewEmail(e.target.value);
        }}
        errorMessage={inputError}
      />
      <div className='flex gap-1 items-center'>
        <PiWarningFill />
        <Paragraph>
          You will have to login again after changing your email.
        </Paragraph>
      </div>
      <Button showIcon={false} text='Save' onClick={handleEmailChange} />
    </>
  );
}
