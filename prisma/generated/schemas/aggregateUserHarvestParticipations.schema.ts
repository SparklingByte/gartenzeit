import { z } from 'zod';
import { UserHarvestParticipationsOrderByWithRelationInputObjectSchema } from './objects/UserHarvestParticipationsOrderByWithRelationInput.schema';
import { UserHarvestParticipationsWhereInputObjectSchema } from './objects/UserHarvestParticipationsWhereInput.schema';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './objects/UserHarvestParticipationsWhereUniqueInput.schema';
import { UserHarvestParticipationsCountAggregateInputObjectSchema } from './objects/UserHarvestParticipationsCountAggregateInput.schema';
import { UserHarvestParticipationsMinAggregateInputObjectSchema } from './objects/UserHarvestParticipationsMinAggregateInput.schema';
import { UserHarvestParticipationsMaxAggregateInputObjectSchema } from './objects/UserHarvestParticipationsMaxAggregateInput.schema';

export const UserHarvestParticipationsAggregateSchema = z.object({
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
  _count: z
    .union([
      z.literal(true),
      UserHarvestParticipationsCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: UserHarvestParticipationsMinAggregateInputObjectSchema.optional(),
  _max: UserHarvestParticipationsMaxAggregateInputObjectSchema.optional(),
});
