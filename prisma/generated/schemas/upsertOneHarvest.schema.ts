import { z } from 'zod';
import { HarvestWhereUniqueInputObjectSchema } from './objects/HarvestWhereUniqueInput.schema';
import { HarvestCreateInputObjectSchema } from './objects/HarvestCreateInput.schema';
import { HarvestUncheckedCreateInputObjectSchema } from './objects/HarvestUncheckedCreateInput.schema';
import { HarvestUpdateInputObjectSchema } from './objects/HarvestUpdateInput.schema';
import { HarvestUncheckedUpdateInputObjectSchema } from './objects/HarvestUncheckedUpdateInput.schema';

export const HarvestUpsertSchema = z.object({
  where: HarvestWhereUniqueInputObjectSchema,
  create: z.union([
    HarvestCreateInputObjectSchema,
    HarvestUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    HarvestUpdateInputObjectSchema,
    HarvestUncheckedUpdateInputObjectSchema,
  ]),
});
