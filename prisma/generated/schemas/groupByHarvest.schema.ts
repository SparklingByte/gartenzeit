import { z } from 'zod';
import { HarvestWhereInputObjectSchema } from './objects/HarvestWhereInput.schema';
import { HarvestOrderByWithAggregationInputObjectSchema } from './objects/HarvestOrderByWithAggregationInput.schema';
import { HarvestScalarWhereWithAggregatesInputObjectSchema } from './objects/HarvestScalarWhereWithAggregatesInput.schema';
import { HarvestScalarFieldEnumSchema } from './enums/HarvestScalarFieldEnum.schema';

export const HarvestGroupBySchema = z.object({
  where: HarvestWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      HarvestOrderByWithAggregationInputObjectSchema,
      HarvestOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: HarvestScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(HarvestScalarFieldEnumSchema),
});
