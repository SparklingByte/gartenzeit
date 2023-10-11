'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn('credentials', {
          email,
          password,
          redirect: true,
          callbackUrl: '/',
        });
      }}
    >
      <input
        type='email'
        placeholder='Your Email'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      ></input>
      <input
        type='password'
        placeholder='Your password'
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      ></input>
      <button type='submit'>Login</button>
    </form>
  );
}
