import { z } from 'zod';

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
