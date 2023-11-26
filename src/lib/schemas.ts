import { string, z } from 'zod';

// Zod validations to validate data

export const HarvestSchema = z.object({
  id: z.string().uuid('The id of the harvest has to be a valid UUID'),
  title: z
    .string()
    .min(5, 'The title must contain at least 5 characters.')
    .max(20, 'The length of the title must not exceed 20 characters.'),
  description: z
    .string()
    .min(10, 'The description must contain at least 10 characters.')
    .max(200, 'The description must not have more than 200 characters.'),
  reward: z
    .string()
    .min(3, 'The rewards has to have more than 3 characters')
    .max(50, 'The rewards must not have more than 50 characters.'),
  produce: z
    .string()
    .min(3, 'At least 3 characters for produce')
    .max(50, 'Maximum of 50 characters for produce'),
  location: z.string(),
  dateTime: z.string().datetime(),
  hostUserId: z.string().uuid('User ID must be a valid UUID'),
});

export const HarvestIdSchema = z.string().uuid();

export const HarvestParticipantsSchema = z
  .object({
    userId: z.string().uuid('User ID must be a valid UUID'),
    status: z.enum(['PENDING', 'ACCEPTED', 'REJECTED']),
  })
  .array();

//* Authentication / user data

export const UserEmail = z
  .string()
  .email('Please provide a valid email like me@hello.com');

export const UserUsername = z
  .string()
  .min(3, 'The username needs at least 3 characters')
  .max(10, 'The username can have a maximum of 10 characters')
  .regex(
    new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/),
    'The username should contain only alphabets'
  );

export const UserLocation = z
  .string()
  .min(3, 'Please provide an valid location name')
  .regex(
    new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/),
    'The location name should contain only alphabets'
  );

export const UserPassword = z
  .string()
  .min(8, 'The passwords needs at least 8 characters');

export const UserRegistrationDataSchema = z
  .object({
    email: UserEmail,
    username: UserUsername,
    location: UserLocation,
    password: UserPassword,
    passwordConfirmation: UserPassword,
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirmation;
    },
    { message: 'The passwords do not match', path: ['passwordConfirmation'] }
  );

export const UserLoginDataSchema = z.object({
  email: UserEmail,
  password: UserPassword,
});
