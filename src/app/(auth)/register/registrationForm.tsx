'use client';

import { z } from 'zod';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import SingleLineInput from '@/components/input-fields/SingleLineInput';
import InputContainer from '@/components/form/InputContainer';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import AuthenticationAlert from '@/components/AuthenticationAlert';

export default function UserRegistrationForm() {
  const [inputErrors, setInputErrors] = useState<
    z.ZodFormattedError<{
      email: string;
      username: string;
      password: string;
      passwordConfirmation: string;
    }>
  >();
  const [registerError, setRegisterError] = useState<{
    error: boolean;
    message: string | null;
  }>();

  async function handleFormSubmit(form: HTMLFormElement) {
    const userFormData = new FormData(form);
    const submittedUserData = {
      username: userFormData.get('username'),
      email: userFormData.get('email'),
      password: userFormData.get('password'),
      passwordConfirmation: userFormData.get('passwordConfirmation'),
    };

    const userDataSchema = z
      .object({
        email: z.string().email('Invalid email provided'),
        username: z
          .string()
          .min(3, 'The username needs at least 3 characters')
          .max(10, 'The username can have a maximum of 10 characters.'),
        password: z
          .string()
          .min(8, 'The passwords needs at least 8 characters'),
        passwordConfirmation: z
          .string()
          .min(8, 'The passwords needs at least 8 characters'),
      })
      .refine((data) => {
        return data.password === data.passwordConfirmation;
      }, 'The passwords do not match');

    // Front end validation of user data before sending to API
    const parsedUserData = userDataSchema.safeParse(submittedUserData);

    if (parsedUserData.success === false) {
      const formattedErrors = parsedUserData.error.format();

      // Add the password match error message into passwordConfirmation property
      if (formattedErrors._errors) {
        formattedErrors.passwordConfirmation?._errors.push(
          formattedErrors._errors[0],
        );
      }
      setInputErrors(parsedUserData.error.format());
      return;
    }

    // Send POST request to API to try to create a new user
    const res = await fetch('/api/auth/register', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: parsedUserData.data.username,
        email: parsedUserData.data.email,
        password: parsedUserData.data.password,
        passwordConfirmation: parsedUserData.data.passwordConfirmation,
      }),
    });

    // Convert the body of the response from the server into object
    // and show according message
    const { user, message } = await res.json();

    // Login user if API reponds with user object or log error message
    if (user) {
      signIn('credentials', {
        email: user.email,
        password: parsedUserData.data.password,
        callbackUrl: window.location.origin,
        redirect: true,
      });
    } else {
      setRegisterError({ error: true, message });
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setRegisterError({ error: false, message: null });
        setInputErrors(undefined);
        handleFormSubmit(e.currentTarget);
      }}
      className='grid gap-3'
    >
      {registerError?.error ? (
        <AuthenticationAlert
          message={registerError.message || ''}
          status='error'
        ></AuthenticationAlert>
      ) : (
        ''
      )}
      <div className='mb-5 grid gap-3'>
        <InputContainer>
          <label
            className='mb-2'
            htmlFor='username'
          >
            Your desired username
          </label>
          <SingleLineInput
            id='username'
            name='username'
            placeholder='E.g. Lilly142'
            required
          ></SingleLineInput>
          {inputErrors?.username
            ? inputErrors.username._errors.map((error) => {
                return (
                  <p
                    className='bg-red-800 text-white p-3 rounded-md'
                    key={`error-${error}`}
                  >
                    {error}
                  </p>
                );
              })
            : ''}
        </InputContainer>
        <InputContainer>
          <label
            className='mb-2'
            htmlFor='email'
          >
            Your email
          </label>
          <SingleLineInput
            id='email'
            type='email'
            name='email'
            required
          ></SingleLineInput>
          {inputErrors?.email
            ? inputErrors.email._errors.map((error) => {
                return (
                  <p
                    className='bg-red-800 text-white p-3 rounded-md'
                    key={`error-${error}`}
                  >
                    {error}
                  </p>
                );
              })
            : ''}
        </InputContainer>
        <InputContainer>
          <label
            className='mb-2'
            htmlFor='password'
          >
            Your password
          </label>
          <SingleLineInput
            id='password'
            name='password'
            type='password'
          ></SingleLineInput>
          {inputErrors?.password
            ? inputErrors.password._errors.map((error) => {
                return (
                  <p
                    className='bg-red-800 text-white p-3 rounded-md'
                    key={`error-${error}`}
                  >
                    {error}
                  </p>
                );
              })
            : ''}
        </InputContainer>
        <InputContainer>
          <label
            className='mb-2'
            htmlFor='passwordConfirm'
          >
            Retype your password
          </label>
          <SingleLineInput
            id='passwordConfirmation'
            name='passwordConfirmation'
            type='password'
          ></SingleLineInput>
          {inputErrors?.passwordConfirmation
            ? inputErrors.passwordConfirmation._errors.map((error) => {
                return (
                  <p
                    className='bg-red-800 text-white p-3 rounded-md'
                    key={`error-${error}`}
                  >
                    {error}
                  </p>
                );
              })
            : ''}
          {inputErrors?._errors ? (
            <p
              className='bg-red-800 text-white p-3 rounded-md'
              key={`error-${inputErrors._errors[0]}`}
            >
              {inputErrors._errors[0]}
            </p>
          ) : (
            ''
          )}
        </InputContainer>
      </div>

      <PrimaryButton type='submit'>{"Let's Go"}</PrimaryButton>
    </form>
  );
}
