'use client';

import { z } from 'zod';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Button from '@/components/buttons/Button';
import InputField from '@/components/form/input/InputField';

// Data validation for user registration form
const userDataSchema = z
  .object({
    email: z.string().email('Please provide a valid email like me@hello.com'),
    username: z
      .string()
      .min(3, 'The username needs at least 3 characters')
      .max(10, 'The username can have a maximum of 10 characters')
      .regex(
        new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/),
        'The username should contain only alphabets'
      ),
    location: z
      .string()
      .min(3, 'Please provide an valid location name')
      .regex(
        new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/),
        'The location name should contain only alphabets'
      ),
    password: z.string().min(8, 'The passwords needs at least 8 characters'),
    passwordConfirmation: z
      .string()
      .min(8, 'The passwords needs at least 8 characters'),
  })
  .refine((data) => {
    return data.password === data.passwordConfirmation;
  }, 'The passwords do not match');

// Form component
export default function UserRegistrationForm() {
  // Store validation errors into state to trigger rerender
  const [inputErrors, setInputErrors] = useState<{
    username: string | undefined;
    email: string | undefined;
    location: string | undefined;
    password: string | undefined;
    passwordConfirmation: string | undefined;
  }>();

  // Create state for response from API to trigger rerender (showing errors)
  const [registerError, setRegisterError] = useState<{
    error: boolean;
    message: string | null;
  }>();

  // Function to submit data to API
  async function handleFormSubmit(form: HTMLFormElement) {
    const userFormData = new FormData(form);
    const submittedUserData = {
      username: userFormData.get('username'),
      email: userFormData.get('email'),
      location: userFormData.get('location'),
      password: userFormData.get('password'),
      passwordConfirmation: userFormData.get('passwordConfirmation'),
    };

    // Front end validation of user data before sending to API
    const parsedUserData = userDataSchema.safeParse(submittedUserData);

    if (parsedUserData.success === false) {
      const formattedErrors = parsedUserData.error.format();

      // Add the password match error message into passwordConfirmation property
      if (formattedErrors._errors) {
        formattedErrors.passwordConfirmation?._errors.push(
          formattedErrors._errors[0]
        );
      }
      setInputErrors({
        username: formattedErrors.username?._errors[0],
        email: formattedErrors.email?._errors[0],
        location: formattedErrors.location?._errors[0],
        password: formattedErrors.password?._errors[0],
        passwordConfirmation:
          formattedErrors.passwordConfirmation?._errors[0] ||
          formattedErrors._errors[0],
      });
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
        location: parsedUserData.data.location,
        email: parsedUserData.data.email,
        password: parsedUserData.data.password,
        passwordConfirmation: parsedUserData.data.passwordConfirmation,
      }),
    });

    // Get user and message from server
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
      className='grid gap-3 p-5 bg-background-100 rounded-xl'
    >
      <InputField
        name='username'
        id='username'
        label='Your username'
        color='base'
        errorMessage={inputErrors?.username}
      ></InputField>
      <InputField
        name='email'
        id='email'
        label='Your Email'
        color='base'
        errorMessage={inputErrors?.email}
      ></InputField>
      <InputField
        name='location'
        id='location'
        label='Name of your city / town / village'
        color='base'
        errorMessage={inputErrors?.location}
      ></InputField>
      <InputField
        name='password'
        id='password'
        type='password'
        label='Your Password'
        errorMessage={inputErrors?.password}
        color='base'
      ></InputField>
      <InputField
        name='passwordConfirmation'
        id='password'
        type='password'
        label='Confirm Your Password'
        errorMessage={inputErrors?.passwordConfirmation}
        color='base'
      ></InputField>
      <div className='mt-3 grid'>
        <Button showIcon text='Join' />
      </div>
    </form>
  );
}
