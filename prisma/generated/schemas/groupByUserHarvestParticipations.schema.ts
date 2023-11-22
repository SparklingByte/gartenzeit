import { z } from 'zod';
import { UserHarvestParticipationsWhereInputObjectSchema } from './objects/UserHarvestParticipationsWhereInput.schema';
import { UserHarvestParticipationsOrderByWithAggregationInputObjectSchema } from './objects/UserHarvestParticipationsOrderByWithAggregationInput.schema';
import { UserHarvestParticipationsScalarWhereWithAggregatesInputObjectSchema } from './objects/UserHarvestParticipationsScalarWhereWithAggregatesInput.schema';
import { UserHarvestParticipationsScalarFieldEnumSchema } from './enums/UserHarvestParticipationsScalarFieldEnum.schema';

export const UserHarvestParticipationsGroupBySchema = z.object({
  where: UserHarvestParticipationsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserHarvestParticipationsOrderByWithAggregationInputObjectSchema,
      UserHarvestParticipationsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    UserHarvestParticipationsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserHarvestParticipationsScalarFieldEnumSchema),
});
