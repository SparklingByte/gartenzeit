import { z } from 'zod';
import { HarvestWhereInputObjectSchema } from './objects/HarvestWhereInput.schema';

export const HarvestDeleteManySchema = z.object({
  where: HarvestWhereInputObjectSchema.optional(),
});
