'use client';

import { signIn } from 'next-auth/react';

export default function LoginForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        signIn('credentials', {
          email,
          password,
          redirect: true,
        });
      }}
    >
      <input
        type='email'
        name='email'
        placeholder='Your Email'
      ></input>
      <input
        type='password'
        name='password'
        placeholder='Your password'
      ></input>
      <button type='submit'>Login</button>
    </form>
  );
}
