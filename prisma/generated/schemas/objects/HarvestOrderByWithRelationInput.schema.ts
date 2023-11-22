import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { UserHarvestParticipationsOrderByRelationAggregateInputObjectSchema } from './UserHarvestParticipationsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    reward: z.lazy(() => SortOrderSchema).optional(),
    produce: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    dateTime: z.lazy(() => SortOrderSchema).optional(),
    hostUserId: z.lazy(() => SortOrderSchema).optional(),
    host: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    participants: z
      .lazy(
        () =>
          UserHarvestParticipationsOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const HarvestOrderByWithRelationInputObjectSchema = Schema;
