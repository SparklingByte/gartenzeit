import { z } from 'zod';
import { HarvestWhereInputObjectSchema } from './HarvestWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestListRelationFilter> = z
  .object({
    every: z.lazy(() => HarvestWhereInputObjectSchema).optional(),
    some: z.lazy(() => HarvestWhereInputObjectSchema).optional(),
    none: z.lazy(() => HarvestWhereInputObjectSchema).optional(),
  })
  .strict();

export const HarvestListRelationFilterObjectSchema = Schema;
