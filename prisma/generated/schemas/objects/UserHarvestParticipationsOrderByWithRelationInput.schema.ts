import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { HarvestOrderByWithRelationInputObjectSchema } from './HarvestOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      harvestId: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
      harvest: z
        .lazy(() => HarvestOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();

export const UserHarvestParticipationsOrderByWithRelationInputObjectSchema =
  Schema;
