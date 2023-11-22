import { z } from 'zod';
import { UserHarvestParticipationsWhereInputObjectSchema } from './objects/UserHarvestParticipationsWhereInput.schema';

export const UserHarvestParticipationsDeleteManySchema = z.object({
  where: UserHarvestParticipationsWhereInputObjectSchema.optional(),
});
