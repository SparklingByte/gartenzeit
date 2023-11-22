import { z } from 'zod';
import { UserHarvestParticipationsUpdateInputObjectSchema } from './objects/UserHarvestParticipationsUpdateInput.schema';
import { UserHarvestParticipationsUncheckedUpdateInputObjectSchema } from './objects/UserHarvestParticipationsUncheckedUpdateInput.schema';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './objects/UserHarvestParticipationsWhereUniqueInput.schema';

export const UserHarvestParticipationsUpdateOneSchema = z.object({
  data: z.union([
    UserHarvestParticipationsUpdateInputObjectSchema,
    UserHarvestParticipationsUncheckedUpdateInputObjectSchema,
  ]),
  where: UserHarvestParticipationsWhereUniqueInputObjectSchema,
});
