import { z } from 'zod';
import { HarvestUpdateInputObjectSchema } from './objects/HarvestUpdateInput.schema';
import { HarvestUncheckedUpdateInputObjectSchema } from './objects/HarvestUncheckedUpdateInput.schema';
import { HarvestWhereUniqueInputObjectSchema } from './objects/HarvestWhereUniqueInput.schema';

export const HarvestUpdateOneSchema = z.object({
  data: z.union([
    HarvestUpdateInputObjectSchema,
    HarvestUncheckedUpdateInputObjectSchema,
  ]),
  where: HarvestWhereUniqueInputObjectSchema,
});
