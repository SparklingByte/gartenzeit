'use client';

import { useState } from 'react';
import { z } from 'zod';
import AlertBox from '@/components/ui/display/AlertBox';
import Button from '@/components/buttons/Button';
import InputField from '@/components/form/input/InputField';
import { useRouter } from 'next/navigation';
import { HarvestCreationSchema } from '@/lib/schemas';
import { error } from 'console';

export default function HarvestCreateForm() {
  const router = useRouter();
  const [inputErrors, setInputErrors] = useState<{
    title: string | undefined;
    description: string | undefined;
    reward: string | undefined;
    produce: string | undefined;
    location: string | undefined;
    dateTime: string | undefined;
  }>();

  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>();
  const [errorAlert, setErrorAlert] = useState<string>();
  const [loading, setLoading] = useState<{ isLoading: boolean; text?: string }>(
    { isLoading: false }
  );

  async function handleHarvestCreation(form: HTMLFormElement) {
    setLoading({ isLoading: true, text: 'Creating harvest...' });

    const formData = new FormData(form);

    // Reset errors
    setInputErrors(undefined);
    setErrorAlert(undefined);

    // Get values of input fields
    const harvestTitle = String(formData.get('title'));
    const harvestDescription = String(formData.get('description'));
    const harvestProduce = String(formData.get('produce'));
    const harvestReward = String(formData.get('reward'));
    const harvestLocation = String(formData.get('location'));
    const harvestDateTime = new Date(String(formData.get('dateTime')));

    const harvestCreationData: z.infer<typeof HarvestCreationSchema> = {
      title: harvestTitle,
      description: harvestDescription,
      produce: harvestProduce,
      reward: harvestReward,
      location: harvestLocation,
      dateTime: harvestDateTime,
    };

    // Validate data from form
    const parsedData = HarvestCreationSchema.safeParse(harvestCreationData);

    if (parsedData.success === false) {
      const formattedErrors = parsedData.error.format();
      setInputErrors({
        title: formattedErrors.title?._errors[0],
        description: formattedErrors.description?._errors[0],
        reward: formattedErrors.reward?._errors[0],
        produce: formattedErrors.produce?._errors[0],
        location: formattedErrors.location?._errors[0],
        dateTime: formattedErrors.dateTime?._errors[0],
      });
      setLoading({ isLoading: false });
      return;
    }

    const res = await fetch('/api/harvests', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(harvestCreationData),
    });

    const resBody = await res.json();

    if (res.ok) {
      setShowSuccessAlert(true);
      setLoading({ isLoading: true, text: 'Redirecting to harvest...' });

      // Redirect user to new created harvest after delay
      setTimeout(() => {
        router.push('/harvest/' + resBody.harvestId);
      }, 2000);
    } else {
      setLoading({ isLoading: false });
      setErrorAlert(resBody.message);
    }
  }

  return (
    <form
      className='grid gap-5'
      onSubmit={(e) => {
        e.preventDefault();
        handleHarvestCreation(e.currentTarget);
      }}
    >
      {errorAlert && (
        <AlertBox status='error' title='Error' message={errorAlert} />
      )}
      {showSuccessAlert && (
        <AlertBox
          status='success'
          title='Harvest created'
          message='The harvest was successfully created. You will be redirected to the page of the harvest shortly.'
        />
      )}
      <InputField
        name='title'
        id='title'
        color='base'
        label='Title of the harvest'
        errorMessage={inputErrors?.title}
      />
      <InputField
        name='description'
        id='description'
        multiline
        color='base'
        label='Description'
        errorMessage={inputErrors?.description}
      />
      <InputField
        name='reward'
        id='reward'
        color='base'
        label='Whats the reward'
        errorMessage={inputErrors?.reward}
      />
      <InputField
        name='produce'
        id='produce'
        color='base'
        label='What do you want to harvest'
        errorMessage={inputErrors?.produce}
      />
      <InputField
        name='location'
        id='location'
        color='base'
        label='Location of your garden'
        errorMessage={inputErrors?.location}
      />
      <InputField
        name='dateTime'
        id='dateTime'
        type='datetime-local'
        color='base'
        label='Date of harvest'
        errorMessage={inputErrors?.dateTime}
      />
      <Button
        isLoading={loading.isLoading}
        loadingText={loading.text}
        showIcon={true}
        disabled={loading.isLoading}
        text='Create'
        type='submit'
      />
    </form>
  );
}
