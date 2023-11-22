import { z } from 'zod';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';
import { NestedEnumUserHarvestParticipationStatusWithAggregatesFilterObjectSchema } from './NestedEnumUserHarvestParticipationStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumUserHarvestParticipationStatusFilterObjectSchema } from './NestedEnumUserHarvestParticipationStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumUserHarvestParticipationStatusWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => UserHarvestParticipationStatusSchema).optional(),
      in: z
        .union([
          z.lazy(() => UserHarvestParticipationStatusSchema).array(),
          z.lazy(() => UserHarvestParticipationStatusSchema),
        ])
        .optional(),
      notIn: z
        .union([
          z.lazy(() => UserHarvestParticipationStatusSchema).array(),
          z.lazy(() => UserHarvestParticipationStatusSchema),
        ])
        .optional(),
      not: z
        .union([
          z.lazy(() => UserHarvestParticipationStatusSchema),
          z.lazy(
            () =>
              NestedEnumUserHarvestParticipationStatusWithAggregatesFilterObjectSchema,
          ),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumUserHarvestParticipationStatusFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumUserHarvestParticipationStatusFilterObjectSchema)
        .optional(),
    })
    .strict();

export const EnumUserHarvestParticipationStatusWithAggregatesFilterObjectSchema =
  Schema;
