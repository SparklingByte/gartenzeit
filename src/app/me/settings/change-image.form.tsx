'use client';

import InputField from '@/components/form/input/InputField';
import Button from '@/components/buttons/Button';
import { useState } from 'react';
import AlertBox from '@/components/ui/display/AlertBox';

export default function ChangeImageForm() {
  const [loading, setLoading] = useState<boolean>();
  const [statusAlert, setStatusAlert] = useState<{
    status: 'success' | 'error';
    title: string;
    message: string;
  }>();
  const [inputError, setInputError] = useState<string>();
  const [file, setFile] = useState<File>();

  async function handleImageUpload(form: HTMLFormElement) {
    // TODO Replace with global constants
    const MAX_IMAGE_SIZE = 5000000;
    const ALLOWED_IMAGE_FORMATS = ['image/jpeg', 'image/jpg', 'image/png'];

    setInputError(undefined);
    setStatusAlert(undefined);
    setLoading(true);

    // Get image from form data
    const formData = new FormData(form);
    const image = formData.get('image') as File;

    // Validate image (size & format)
    if (image.size > MAX_IMAGE_SIZE) {
      setInputError('The file must not be bigger than 5 MB');
      setLoading(false);
      return;
    }

    if (ALLOWED_IMAGE_FORMATS.indexOf(image.type) === -1) {
      setInputError('The image file must be in JPEG, JPG or PNG file format.');
      setLoading(false);
      return;
    }

    // Send to API
    const res = await fetch('/api/me/image', {
      method: 'POST',
      body: formData,
    });

    const resBody = await res.json();

    if (!res.ok) {
      setStatusAlert({
        title: 'Cannot save image',
        status: 'error',
        message: resBody.message,
      });
      setLoading(false);
      return;
    }

    // Show alert

    setStatusAlert({
      title: 'Image saved',
      status: 'success',
      message:
        'Your image was successfully uploaded and saved. Refresh you profile page to show your new image.',
    });
    setLoading(false);
  }

  return (
    <>
      {statusAlert && (
        <AlertBox
          title={statusAlert.title}
          status={statusAlert.status}
          message={statusAlert.message}
        ></AlertBox>
      )}
      <form
        className='grid gap-5'
        onSubmit={(e) => {
          e.preventDefault();
          handleImageUpload(e.currentTarget);
        }}
      >
        <InputField
          name='image'
          label='Supported files: JPEG, JPG, PNG. Maximum size: 5 MB.'
          color='base'
          type='file'
          accept='image/jpeg, image/jpg, image/png'
          errorMessage={inputError}
          onChange={(e) => {
            const file = e.target.files[0] as File; // TODO Fix typescript error
            if (file) {
              setFile(file);
            } else {
              setFile(undefined);
            }
          }}
        ></InputField>
        <Button
          isLoading={loading}
          loadingText='Uploading and saving image...'
          disabled={loading || !file}
          showIcon={false}
          text='Save new image'
          type='submit'
        ></Button>
      </form>
    </>
  );
}
