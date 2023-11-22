import { z } from 'zod';
import { HarvestUpdateManyMutationInputObjectSchema } from './objects/HarvestUpdateManyMutationInput.schema';
import { HarvestWhereInputObjectSchema } from './objects/HarvestWhereInput.schema';

export const HarvestUpdateManySchema = z.object({
  data: HarvestUpdateManyMutationInputObjectSchema,
  where: HarvestWhereInputObjectSchema.optional(),
});
