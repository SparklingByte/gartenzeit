import { z } from 'zod';

//* Single user data schema

export const UserId = z.string().uuid();

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

export const UserDescription = z
  .string()
  .max(200, 'The description can have a maximum of 200 characters');

export const UserPassword = z
  .string()
  .min(8, 'The passwords needs at least 8 characters');

export const UserImage = z.string().url();

//* Single harvest data schema

export const HarvestId = z
  .string()
  .uuid('The id of the harvest has to be a valid UUID');
export const HarvestTitle = z
  .string()
  .min(5, 'The title must contain at least 5 characters.')
  .max(20, 'The length of the title must not exceed 20 characters.');
export const HarvestDescription = z
  .string()
  .min(10, 'The description must contain at least 10 characters.')
  .max(200, 'The description must not have more than 200 characters.');

export const HarvestReward = z
  .string()
  .min(3, 'The rewards has to have more than 3 characters')
  .max(50, 'The rewards must not have more than 50 characters.');

export const HarvestProduce = z
  .string()
  .min(3, 'At least 3 characters for produce')
  .max(50, 'Maximum of 50 characters for produce');

export const HarvestLocation = z
  .string()
  .min(5, 'The location has to contain at least 5 characters.');

//! Check if it causes any API problems (especially for creating harvests)
export const HarvestDateTime = z.date();

export const HarvestParticipationStatus = z.enum([
  'PENDING',
  'CONFIRMED',
  'REJECTED',
]);

//* Complex schema

export const HarvestSchema = z.object({
  id: HarvestId,
  title: HarvestTitle,
  description: HarvestDescription,
  reward: HarvestReward,
  produce: HarvestProduce,
  location: HarvestLocation,
  dateTime: HarvestDateTime,
  hostUserId: UserId,
});

export const HarvestCreationSchema = z.object({
  title: HarvestTitle,
  description: HarvestDescription,
  reward: HarvestReward,
  produce: HarvestProduce,
  location: HarvestLocation,
  dateTime: HarvestDateTime,
});

export const HarvestParticipantsSchema = z
  .object({
    userId: UserId,
    status: HarvestParticipationStatus,
  })
  .array();

export const HarvestParticipationSchema = z.object({
  harvest: HarvestSchema,
  status: HarvestParticipationStatus,
});

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

export const PublicUserDataSchema = z.object({
  username: UserUsername,
  location: UserLocation.nullable(),
  description: UserDescription.nullable(),
  image: UserImage.nullable(),
});
