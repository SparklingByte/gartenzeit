'use client';

import { signIn } from 'next-auth/react';
import { z } from 'zod';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

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
          email: formData.get('email'),
          password: formData.get('password'),
        });
      }}
    >
      <input
        type='email'
        name='email'
        placeholder='Your Email'
      ></input>
      {inputErrors?.email
        ? inputErrors.email._errors.map((error) => {
            return <span key={`error-${error}`}>{error}</span>;
          })
        : ''}
      <input
        type='password'
        name='password'
        placeholder='Your password'
      ></input>
      {inputErrors?.password
        ? inputErrors.password._errors.map((error) => {
            return <span key={`error-${error}`}>{error}</span>;
          })
        : ''}

      <button type='submit'>Login</button>
    </form>
  );
}
