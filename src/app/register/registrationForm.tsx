'use client';

async function handleFormSubmit(form: HTMLFormElement) {
  const formData = new FormData(form);
  const email = formData.get('email');
  const username = formData.get('username');
  const password = formData.get('password');
  const passwordConfirm = formData.get('passwordConfirm');

  // Send POST request to api to try to create a new user
  const userRegistrationFetch = await fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      email,
      username,
      password,
      passwordConfirm,
    }),
  });

  // Convert the body of the response from the server into object
  // and show according message
  const userRegistrationResponse = await userRegistrationFetch.json();

  if (userRegistrationFetch.ok) {
    console.log(userRegistrationResponse.message);
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
