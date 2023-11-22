import { z } from 'zod';
import { HarvestOrderByWithRelationInputObjectSchema } from './objects/HarvestOrderByWithRelationInput.schema';
import { HarvestWhereInputObjectSchema } from './objects/HarvestWhereInput.schema';
import { HarvestWhereUniqueInputObjectSchema } from './objects/HarvestWhereUniqueInput.schema';
import { HarvestScalarFieldEnumSchema } from './enums/HarvestScalarFieldEnum.schema';

export const HarvestFindManySchema = z.object({
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
  distinct: z.array(HarvestScalarFieldEnumSchema).optional(),
});
