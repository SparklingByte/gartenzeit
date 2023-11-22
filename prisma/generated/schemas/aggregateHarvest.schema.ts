import { z } from 'zod';
import { HarvestOrderByWithRelationInputObjectSchema } from './objects/HarvestOrderByWithRelationInput.schema';
import { HarvestWhereInputObjectSchema } from './objects/HarvestWhereInput.schema';
import { HarvestWhereUniqueInputObjectSchema } from './objects/HarvestWhereUniqueInput.schema';
import { HarvestCountAggregateInputObjectSchema } from './objects/HarvestCountAggregateInput.schema';
import { HarvestMinAggregateInputObjectSchema } from './objects/HarvestMinAggregateInput.schema';
import { HarvestMaxAggregateInputObjectSchema } from './objects/HarvestMaxAggregateInput.schema';

export const HarvestAggregateSchema = z.object({
  orderBy: z
    .union([
      HarvestOrderByWithRelationInputObjectSchema,
      HarvestOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: HarvestWhereInputObjectSchema.optional(),
  cursor: HarvestWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), HarvestCountAggregateInputObjectSchema])
    .optional(),
  _min: HarvestMinAggregateInputObjectSchema.optional(),
  _max: HarvestMaxAggregateInputObjectSchema.optional(),
});
