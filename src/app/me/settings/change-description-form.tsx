'use client';

import { useState } from 'react';
import InputField from '@/components/form/input/InputField';
import Button from '@/components/buttons/Button';
import { UserDescription } from '@/lib/schemas';
import AlertBox from '@/components/ui/display/AlertBox';

export default function ChangeDescriptionForm({
  userId,
  oldDescriptionPlaceholder,
}: {
  userId: string;
  oldDescriptionPlaceholder: string | null;
}) {
  const [newDescription, setNewDescription] = useState(
    oldDescriptionPlaceholder || ''
  );

  const [inputError, setInputError] = useState<string>();
  const [alert, setAlert] = useState<{
    status: 'success' | 'error';
    title: string;
    message: string;
  }>();

  async function handleDescriptionChange() {
    // Reset error & parse data
    setInputError(undefined);
    const parsedData = UserDescription.safeParse(newDescription);

    if (parsedData.success === false) {
      setInputError(parsedData.error.format()._errors[0]);
      return;
    }

    // Call API to change description
    const res = await fetch(`/api/user/${userId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        newDescription,
      }),
    });

    const resBody = await res.json();

    if (!res.ok) {
      setAlert({ title: 'Error', message: resBody.message, status: 'error' });
    }

    setAlert({
      title: 'Success',
      message: 'The description was successfully updated.',
      status: 'success',
    });
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
        multiline={true}
        color='base'
        label='Your Description'
        value={newDescription}
        onChange={(e) => {
          setNewDescription(e.target.value);
        }}
        errorMessage={inputError}
      />
      <Button showIcon={false} text='Save' onClick={handleDescriptionChange} />
    </>
  );
}
