import { z } from 'zod';
import { HarvestWhereUniqueInputObjectSchema } from './objects/HarvestWhereUniqueInput.schema';

export const HarvestDeleteOneSchema = z.object({
  where: HarvestWhereUniqueInputObjectSchema,
});
