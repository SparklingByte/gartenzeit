import { z } from 'zod';

export const HarvestScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'reward',
  'produce',
  'location',
  'dateTime',
  'hostUserId',
]);
