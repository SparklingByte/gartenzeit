import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HarvestCountOrderByAggregateInputObjectSchema } from './HarvestCountOrderByAggregateInput.schema';
import { HarvestMaxOrderByAggregateInputObjectSchema } from './HarvestMaxOrderByAggregateInput.schema';
import { HarvestMinOrderByAggregateInputObjectSchema } from './HarvestMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    reward: z.lazy(() => SortOrderSchema).optional(),
    produce: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    dateTime: z.lazy(() => SortOrderSchema).optional(),
    hostUserId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => HarvestCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => HarvestMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => HarvestMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const HarvestOrderByWithAggregationInputObjectSchema = Schema;
