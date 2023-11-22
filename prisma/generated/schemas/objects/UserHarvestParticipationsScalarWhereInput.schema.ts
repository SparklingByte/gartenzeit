import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumUserHarvestParticipationStatusFilterObjectSchema } from './EnumUserHarvestParticipationStatusFilter.schema';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserHarvestParticipationsScalarWhereInputObjectSchema),
        z
          .lazy(() => UserHarvestParticipationsScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserHarvestParticipationsScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserHarvestParticipationsScalarWhereInputObjectSchema),
        z
          .lazy(() => UserHarvestParticipationsScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    harvestId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumUserHarvestParticipationStatusFilterObjectSchema),
        z.lazy(() => UserHarvestParticipationStatusSchema),
      ])
      .optional(),
  })
  .strict();

export const UserHarvestParticipationsScalarWhereInputObjectSchema = Schema;
