import { z } from 'zod';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './objects/UserHarvestParticipationsWhereUniqueInput.schema';
import { UserHarvestParticipationsCreateInputObjectSchema } from './objects/UserHarvestParticipationsCreateInput.schema';
import { UserHarvestParticipationsUncheckedCreateInputObjectSchema } from './objects/UserHarvestParticipationsUncheckedCreateInput.schema';
import { UserHarvestParticipationsUpdateInputObjectSchema } from './objects/UserHarvestParticipationsUpdateInput.schema';
import { UserHarvestParticipationsUncheckedUpdateInputObjectSchema } from './objects/UserHarvestParticipationsUncheckedUpdateInput.schema';

export const UserHarvestParticipationsUpsertSchema = z.object({
  where: UserHarvestParticipationsWhereUniqueInputObjectSchema,
  create: z.union([
    UserHarvestParticipationsCreateInputObjectSchema,
    UserHarvestParticipationsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    UserHarvestParticipationsUpdateInputObjectSchema,
    UserHarvestParticipationsUncheckedUpdateInputObjectSchema,
  ]),
});
