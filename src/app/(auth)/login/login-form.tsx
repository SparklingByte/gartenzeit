'use client';

import { signIn, useSession } from 'next-auth/react';
import { z } from 'zod';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import AuthenticationAlert from '@/components/AuthenticationAlert';
import SingleLineInput from '@/components/form/input/SingleLineInput';

const userLoginDataSchema = z.object({
  email: z.string().email('Please provide a valid email like hello@mail.com'),
  password: z
    .string()
    .min(
      8,
      'Your passwords has to be at least 8 characters long. Please try again.',
    ),
});

type userLoginDataType = z.infer<typeof userLoginDataSchema>;

export default function LoginForm() {
  const [inputErrors, setInputErrors] =
    useState<z.ZodFormattedError<{ email: string; password: string }>>();
  const { data: session, status } = useSession();

  const searchParams = useSearchParams();
  const callbackUrlParam = searchParams.get('callbackUrl');
  const errorCodeParam = searchParams.get('error');

  async function validateUserLoginInput(inputData: userLoginDataType) {
    const parsedUserLoginData = userLoginDataSchema.safeParse({
      email: inputData.email,
      password: inputData.password,
    });

    if (parsedUserLoginData.success === false) {
      setInputErrors(parsedUserLoginData.error.format());
      return false;
    }

    return parsedUserLoginData.data;
  }

  async function handleUserSignIn(userLoginInput: userLoginDataType) {
    const validatedUserInput = await validateUserLoginInput(userLoginInput);

    if (validatedUserInput !== false) {
      signIn('credentials', {
        email: validatedUserInput.email,
        password: validatedUserInput.password,
        callbackUrl: callbackUrlParam || undefined,
        redirect: true,
      });
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleUserSignIn({
          email: String(formData.get('email')) || '',
          password: String(formData.get('password')) || '',
        });
      }}
      className='grid gap-3'
    >
      {errorCodeParam === 'CredentialsSignin'
        ? AuthenticationAlert({
            status: 'error',
            message: 'Invalid credentials',
          })
        : ''}
      <SingleLineInput
        id='email'
        type='email'
        name='email'
        placeholder='Your Email'
        label='Ya Email'
        errorMessages={inputErrors?.email ? inputErrors.email._errors : []}
      ></SingleLineInput>
      <label htmlFor='password'>Your Password</label>
      <SingleLineInput
        id='password'
        label='Your Password'
        type='password'
        name='password'
        errorMessages={
          inputErrors?.password ? inputErrors.password._errors : undefined
        }
      ></SingleLineInput>

      <button
        className='bg-green-900 p-2 text-white rounded-md'
        type='submit'
      >
        {status === 'loading' ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
}
