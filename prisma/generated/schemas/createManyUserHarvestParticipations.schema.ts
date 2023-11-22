import { z } from 'zod';
import { UserHarvestParticipationsCreateManyInputObjectSchema } from './objects/UserHarvestParticipationsCreateManyInput.schema';

export const UserHarvestParticipationsCreateManySchema = z.object({
  data: z.union([
    UserHarvestParticipationsCreateManyInputObjectSchema,
    z.array(UserHarvestParticipationsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
