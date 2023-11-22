import { z } from 'zod';
import { UserHarvestParticipationsOrderByWithRelationInputObjectSchema } from './objects/UserHarvestParticipationsOrderByWithRelationInput.schema';
import { UserHarvestParticipationsWhereInputObjectSchema } from './objects/UserHarvestParticipationsWhereInput.schema';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './objects/UserHarvestParticipationsWhereUniqueInput.schema';
import { UserHarvestParticipationsScalarFieldEnumSchema } from './enums/UserHarvestParticipationsScalarFieldEnum.schema';

export const UserHarvestParticipationsFindFirstSchema = z.object({
  orderBy: z
    .union([
      UserHarvestParticipationsOrderByWithRelationInputObjectSchema,
      UserHarvestParticipationsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UserHarvestParticipationsWhereInputObjectSchema.optional(),
  cursor: UserHarvestParticipationsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UserHarvestParticipationsScalarFieldEnumSchema).optional(),
});
