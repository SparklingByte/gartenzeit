'use client';

import InputField from '@/components/form/input/InputField';
import Button from '@/components/buttons/Button';
import { useState } from 'react';
import { UserPassword } from '@/lib/schemas';
import AlertBox from '@/components/ui/display/AlertBox';

export default function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState<string>();
  const [newPassword, setNewPassword] = useState<string>();
  const [inputError, setInputError] = useState<string>();
  const [alert, setAlert] = useState<{
    title: string;
    status: 'success' | 'error';
    message: string;
  }>();

  async function handlePasswordChange() {
    // Reset alerts
    setAlert(undefined);
    setInputError(undefined);

    // Validate password
    const parsedData = UserPassword.safeParse(newPassword);

    if (parsedData.success === false) {
      setInputError(parsedData.error.format()._errors[0]);
      return;
    }

    // Call API to change password
    const res = await fetch('/api/auth/changePassword', {
      method: 'POST',
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    });

    const resBody = await res.json();

    // Show error message to user
    if (!res.ok) {
      setAlert({ title: 'Error', status: 'error', message: resBody.message });
      return;
    }

    // Show success message to user
    setAlert({
      title: 'Saved',
      status: 'success',
      message: 'Your password was successfully updated.',
    });
  }

  return (
    <>
      {alert && (
        <AlertBox
          status={alert.status}
          title={alert.title}
          message={alert.message}
        />
      )}
      <InputField
        type='password'
        color='base'
        label='Your current password'
        value={oldPassword}
        onChange={(e) => {
          setOldPassword(e.target.value);
        }}
      />
      <InputField
        type='password'
        color='base'
        label='Your new password'
        value={newPassword}
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
        errorMessage={inputError}
      />
      <Button showIcon={false} text='Save' onClick={handlePasswordChange} />
    </>
  );
}
