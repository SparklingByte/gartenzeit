import { z } from 'zod';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumUserHarvestParticipationStatusFilter> =
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
            () => NestedEnumUserHarvestParticipationStatusFilterObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const NestedEnumUserHarvestParticipationStatusFilterObjectSchema =
  Schema;
