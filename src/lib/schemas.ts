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

export const UserRegistrationDataSchema = z
  .object({
    email: z.string().email('Invalid email provided'),
    username: z
      .string()
      .min(3, 'The username needs at least 3 characters')
      .max(10, 'The username can have a maximum of 10 characters.'),
    location: z.string().min(3, 'The location needs at least 3 characters'),
    password: z.string().min(8, 'The passwords needs at least 8 characters'),
    passwordConfirmation: z
      .string()
      .min(8, 'The passwords needs at least 8 characters'),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirmation;
    },
    { message: 'The passwords have to match', path: ['passwordConfirmation'] }
  );
