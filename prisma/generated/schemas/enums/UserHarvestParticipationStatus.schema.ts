import { z } from 'zod';

export const UserHarvestParticipationStatusSchema = z.enum([
  'PENDING',
  'CONFIRMED',
  'REJECTED',
]);
