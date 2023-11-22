import { z } from 'zod';
import { HarvestCreateInputObjectSchema } from './objects/HarvestCreateInput.schema';
import { HarvestUncheckedCreateInputObjectSchema } from './objects/HarvestUncheckedCreateInput.schema';

export const HarvestCreateOneSchema = z.object({
  data: z.union([
    HarvestCreateInputObjectSchema,
    HarvestUncheckedCreateInputObjectSchema,
  ]),
});
