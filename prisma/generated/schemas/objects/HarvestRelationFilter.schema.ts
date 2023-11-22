import { z } from 'zod';
import { HarvestWhereInputObjectSchema } from './HarvestWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestRelationFilter> = z
  .object({
    is: z
      .lazy(() => HarvestWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => HarvestWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const HarvestRelationFilterObjectSchema = Schema;
