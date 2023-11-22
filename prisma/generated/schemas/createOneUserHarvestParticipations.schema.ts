import { z } from 'zod';
import { UserHarvestParticipationsCreateInputObjectSchema } from './objects/UserHarvestParticipationsCreateInput.schema';
import { UserHarvestParticipationsUncheckedCreateInputObjectSchema } from './objects/UserHarvestParticipationsUncheckedCreateInput.schema';

export const UserHarvestParticipationsCreateOneSchema = z.object({
  data: z.union([
    UserHarvestParticipationsCreateInputObjectSchema,
    UserHarvestParticipationsUncheckedCreateInputObjectSchema,
  ]),
});
