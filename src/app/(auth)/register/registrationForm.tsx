'use client';

import { signIn } from 'next-auth/react';

async function handleFormSubmit(form: HTMLFormElement) {
  const formData = new FormData(form);
  const email = formData.get('email');
  const username = formData.get('username');
  const password = formData.get('password');
  const passwordConfirmation = formData.get('passwordConfirm');

  // Send POST request to api to try to create a new user
  const res = await fetch('/api/auth/register', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email,
      username,
      password,
      passwordConfirmation,
    }),
  });

  // Convert the body of the response from the server into object
  // and show according message
  const { user, message } = await res.json();

  // Login user if API reponds with user object or log error message
  if (user) {
    signIn('credentials', {
      email: user.email,
      password,
      callbackUrl: window.location.origin,
      redirect: true,
    });
  } else {
    console.error(`[GARTENZEIT] ${message}`);
  }
}

export default function UserRegistrationForm() {
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

      <label htmlFor='email'>Your email</label>
      <input
        id='email'
        type='email'
        name='email'
        required
      ></input>
      <label htmlFor='password'>Your password</label>
      <input
        id='password'
        name='password'
        type='password'
      ></input>
      <label htmlFor='passwordConfirm'>Retype your password</label>
      <input
        id='passwordConfirm'
        name='passwordConfirm'
        type='password'
      ></input>
      <button type='submit'>Create account</button>
    </form>
  );
}
