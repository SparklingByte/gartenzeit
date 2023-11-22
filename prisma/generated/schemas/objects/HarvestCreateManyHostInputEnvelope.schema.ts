import { z } from 'zod';
import { HarvestCreateManyHostInputObjectSchema } from './HarvestCreateManyHostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestCreateManyHostInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => HarvestCreateManyHostInputObjectSchema),
      z.lazy(() => HarvestCreateManyHostInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const HarvestCreateManyHostInputEnvelopeObjectSchema = Schema;
