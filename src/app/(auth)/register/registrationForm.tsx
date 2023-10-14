'use client';

import { z } from 'zod';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function UserRegistrationForm() {
  const [inputErrors, setInputErrors] = useState<
    z.ZodFormattedError<{
      email: string;
      username: string;
      password: string;
      passwordConfirmation: string;
    }>
  >();

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
      // TODO get erros and show them to users next below the input field
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
      // TODO Show error for user
      console.error(`[GARTENZEIT] ${message}`);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit(e.currentTarget);
      }}
    >
      <label htmlFor='username'>Your desired username</label>
      <input
        id='username'
        name='username'
        required
      ></input>
      {inputErrors?.username
        ? inputErrors.username._errors.map((error) => {
            return <span key={`error-${error}`}>{error}</span>;
          })
        : ''}

      <label htmlFor='email'>Your email</label>
      <input
        id='email'
        type='email'
        name='email'
        required
      ></input>
      {inputErrors?.email
        ? inputErrors.email._errors.map((error) => {
            return <span key={`error-${error}`}>{error}</span>;
          })
        : ''}

      <label htmlFor='password'>Your password</label>
      <input
        id='password'
        name='password'
        type='password'
      ></input>
      {inputErrors?.password
        ? inputErrors.password._errors.map((error) => {
            return <span key={`error-${error}`}>{error}</span>;
          })
        : ''}

      <label htmlFor='passwordConfirm'>Retype your password</label>
      <input
        id='passwordConfirmation'
        name='passwordConfirmation'
        type='password'
      ></input>
      {inputErrors?.passwordConfirmation
        ? inputErrors.passwordConfirmation._errors.map((error) => {
            return <span key={`error-${error}`}>{error}</span>;
          })
        : ''}

      <button type='submit'>Create account</button>
    </form>
  );
}
