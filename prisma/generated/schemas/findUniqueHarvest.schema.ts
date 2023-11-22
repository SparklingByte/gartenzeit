import { z } from 'zod';
import { HarvestWhereUniqueInputObjectSchema } from './objects/HarvestWhereUniqueInput.schema';

export const HarvestFindUniqueSchema = z.object({
  where: HarvestWhereUniqueInputObjectSchema,
});
