'use client';

import InputField from '@/components/form/input/InputField';
import Button from '@/components/buttons/Button';
import { useState } from 'react';
import { UserPassword } from '@/lib/schemas';
import AlertBox from '@/components/ui/display/AlertBox';

export default function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState<string>();
  const [newPassword, setNewPassword] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [alertBoxContent, setAlertBoxContent] = useState<{
    title: string;
    status: 'success' | 'error';
    message: string;
  }>();

  async function handlePasswordChange() {
    // Validate password
    const parsedData = UserPassword.safeParse(newPassword);

    if (parsedData.success === false) {
      setPasswordError(parsedData.error.format()._errors[0]);
      return;
    }

    // TODO Call API to change the password
    // Store message from server to alertBoxContent to display
  }

  return (
    <>
      {alertBoxContent && (
        <AlertBox
          status={alertBoxContent.status}
          title={alertBoxContent.title}
          message={alertBoxContent.message}
        />
      )}
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
      <Button showIcon={false} text='Save' onClick={handlePasswordChange} />
    </>
  );
}
