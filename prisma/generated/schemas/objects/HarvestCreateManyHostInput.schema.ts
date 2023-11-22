import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestCreateManyHostInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    reward: z.string(),
    produce: z.string(),
    location: z.string(),
    dateTime: z.coerce.date(),
  })
  .strict();

export const HarvestCreateManyHostInputObjectSchema = Schema;
