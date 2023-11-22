import { z } from 'zod';
import { UserHarvestParticipationsUpdateManyMutationInputObjectSchema } from './objects/UserHarvestParticipationsUpdateManyMutationInput.schema';
import { UserHarvestParticipationsWhereInputObjectSchema } from './objects/UserHarvestParticipationsWhereInput.schema';

export const UserHarvestParticipationsUpdateManySchema = z.object({
  data: UserHarvestParticipationsUpdateManyMutationInputObjectSchema,
  where: UserHarvestParticipationsWhereInputObjectSchema.optional(),
});
