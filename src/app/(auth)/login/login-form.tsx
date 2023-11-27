'use client';

import { signIn } from 'next-auth/react';
import { z } from 'zod';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import AlertBox from '@/components/ui/display/AlertBox';
import InputField from '@/components/form/input/InputField';
import Button from '@/components/buttons/Button';
import { UserEmail, UserLoginDataSchema, UserPassword } from '@/lib/schemas';

export default function LoginForm() {
  const [inputErrors, setInputErrors] = useState<{
    email: z.infer<typeof UserEmail> | undefined;
    password: z.infer<typeof UserPassword> | undefined;
  }>();

  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>();
  const [showWrongCredentialsAlert, setShowWrongCredentialsAlert] =
    useState<boolean>();

  // Get URL params to display login error and redirect user after login
  const searchParams = useSearchParams();
  const callbackUrlParam = searchParams.get('callbackUrl');

  // Validate input from user with zod
  async function validateUserLoginInput(
    inputData: z.infer<typeof UserLoginDataSchema>
  ) {
    const parsedUserLoginData = UserLoginDataSchema.safeParse({
      email: inputData.email,
      password: inputData.password,
    });

    // Store errors into state to show above according input field
    if (parsedUserLoginData.success === false) {
      const formattedErrors = parsedUserLoginData.error.format();
      setInputErrors({
        email: formattedErrors.email?._errors[0],
        password: formattedErrors.password?._errors[0],
      });
      return false;
    }

    return parsedUserLoginData.data;
  }

  async function handleUserSignIn(
    userLoginInput: z.infer<typeof UserLoginDataSchema>
  ) {
    const validatedUserInput = await validateUserLoginInput(userLoginInput);

    // Send login request if inputs are valid
    if (validatedUserInput) {
      const signInResult = await signIn('credentials', {
        email: validatedUserInput.email,
        password: validatedUserInput.password,
        redirect: false,
      });

      if (signInResult?.ok) {
        setShowSuccessAlert(true);
        setTimeout(() => {
          window.location.href = callbackUrlParam || '/';
        }, 3000);
      } else {
        setShowWrongCredentialsAlert(true);
      }
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        // Reset credentials error
        setShowWrongCredentialsAlert(false);

        const formData = new FormData(e.currentTarget);
        handleUserSignIn({
          email: String(formData.get('email')) || '',
          password: String(formData.get('password')) || '',
        });
      }}
      className='grid gap-5 bg-background-100 rounded-xl p-5'
    >
      {showSuccessAlert && (
        <AlertBox
          status='success'
          title='Woohoo!'
          message='The login was successful! You will be redirected shortly.'
        />
      )}
      {showWrongCredentialsAlert && (
        <AlertBox
          status='error'
          title='Wrong credentials'
          message='Please check your email and password and try again.'
        ></AlertBox>
      )}
      <InputField
        name='email'
        id='email'
        label='Your Email'
        color='base'
        errorMessage={inputErrors?.email}
      ></InputField>
      <InputField
        name='password'
        id='password'
        type='password'
        label='Your Password'
        errorMessage={inputErrors?.password}
        color='base'
      ></InputField>
      <div className='grid mt-3 w-full'>
        <Button showIcon text='Login'></Button>
      </div>
    </form>
  );
}
