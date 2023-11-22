import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserHarvestParticipationsCountOrderByAggregateInputObjectSchema } from './UserHarvestParticipationsCountOrderByAggregateInput.schema';
import { UserHarvestParticipationsMaxOrderByAggregateInputObjectSchema } from './UserHarvestParticipationsMaxOrderByAggregateInput.schema';
import { UserHarvestParticipationsMinOrderByAggregateInputObjectSchema } from './UserHarvestParticipationsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      harvestId: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () => UserHarvestParticipationsCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () => UserHarvestParticipationsMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () => UserHarvestParticipationsMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserHarvestParticipationsOrderByWithAggregationInputObjectSchema =
  Schema;
