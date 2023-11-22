import { z } from 'zod';
import { HarvestCreateManyInputObjectSchema } from './objects/HarvestCreateManyInput.schema';

export const HarvestCreateManySchema = z.object({
  data: z.union([
    HarvestCreateManyInputObjectSchema,
    z.array(HarvestCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
