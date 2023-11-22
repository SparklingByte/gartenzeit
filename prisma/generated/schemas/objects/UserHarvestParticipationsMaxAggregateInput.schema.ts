import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsMaxAggregateInputType> =
  z
    .object({
      id: z.literal(true).optional(),
      userId: z.literal(true).optional(),
      harvestId: z.literal(true).optional(),
      status: z.literal(true).optional(),
    })
    .strict();

export const UserHarvestParticipationsMaxAggregateInputObjectSchema = Schema;
