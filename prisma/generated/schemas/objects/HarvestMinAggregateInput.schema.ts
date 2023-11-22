import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    reward: z.literal(true).optional(),
    produce: z.literal(true).optional(),
    location: z.literal(true).optional(),
    dateTime: z.literal(true).optional(),
    hostUserId: z.literal(true).optional(),
  })
  .strict();

export const HarvestMinAggregateInputObjectSchema = Schema;
