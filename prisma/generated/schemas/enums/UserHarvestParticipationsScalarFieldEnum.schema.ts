import { z } from 'zod';

export const UserHarvestParticipationsScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'harvestId',
  'status',
]);
