import { z } from 'zod';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';
import { NestedEnumUserHarvestParticipationStatusFilterObjectSchema } from './NestedEnumUserHarvestParticipationStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumUserHarvestParticipationStatusFilter> = z
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

export const EnumUserHarvestParticipationStatusFilterObjectSchema = Schema;
