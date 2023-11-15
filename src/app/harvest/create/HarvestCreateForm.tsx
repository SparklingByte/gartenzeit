'use client';

import Button from '@/components/buttons/Button';
import InputField from '@/components/form/input/InputField';
import { useRouter } from 'next/navigation';

export default function HarvestCreateForm() {
  const router = useRouter();
  function handleHarvestCreation(form: HTMLFormElement) {
    const formData = new FormData(form);

    // Get values of input fields
    const harvestTitle = formData.get('title');
    const harvestDescription = formData.get('description');
    const harvestItems = formData.get('items');
    const harvestAdress = formData.get('adress');
    const harvestDate = formData.get('date');
    const harvestTime = formData.get('time');

    // TODO Send request to server, get ID of created post and redirect to new harvest page (& show success message)
  }

  return (
    <form
      className='grid gap-5'
      onSubmit={(e) => {
        e.preventDefault();
        handleHarvestCreation(e.currentTarget);
      }}
    >
      <InputField id='title' color='base' label='Title of the harvest' />
      <InputField id='description' multiline color='base' label='Description' />
      <InputField id='reward' color='base' label='Whats the reward' />
      <InputField id='items' color='base' label='What do you want to harvest' />
      <InputField id='adress' color='base' label='Adress of your garden' />
      <InputField id='date' type='date' color='base' label='Date of harvest' />
      <InputField id='time' type='time' color='base' label='Time to start' />
      <Button showIcon text='Create' type='submit' />
    </form>
  );
}
