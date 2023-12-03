'use client';

import { useState } from 'react';
import InputField from '@/components/form/input/InputField';
import Button from '@/components/buttons/Button';
import { UserEmail } from '@/lib/schemas';

export default function ChangeEmailForm({
  oldEmailPlaceholder,
}: {
  oldEmailPlaceholder: string;
}) {
  const [newEmail, setNewEmail] = useState(oldEmailPlaceholder);
  const [emailError, setEmailError] = useState<string>();

  async function handleEmailChange() {
    // Reset error & parse data
    setEmailError(undefined);
    const parsedData = UserEmail.safeParse(newEmail);

    if (parsedData.success === false) {
      setEmailError(parsedData.error.format()._errors[0]);
      return;
    }

    // TODO Add API call to change the email
  }

  return (
    <>
      <InputField
        color='base'
        label='Your Email'
        value={newEmail}
        onChange={(e) => {
          setNewEmail(e.target.value);
        }}
        errorMessage={emailError}
      />
      <Button showIcon={false} text='Save' onClick={handleEmailChange} />
    </>
  );
}
