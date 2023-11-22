import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumUserHarvestParticipationStatusWithAggregatesFilterObjectSchema } from './EnumUserHarvestParticipationStatusWithAggregatesFilter.schema';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              UserHarvestParticipationsScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () =>
            UserHarvestParticipationsScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              UserHarvestParticipationsScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      userId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      harvestId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      status: z
        .union([
          z.lazy(
            () =>
              EnumUserHarvestParticipationStatusWithAggregatesFilterObjectSchema,
          ),
          z.lazy(() => UserHarvestParticipationStatusSchema),
        ])
        .optional(),
    })
    .strict();

export const UserHarvestParticipationsScalarWhereWithAggregatesInputObjectSchema =
  Schema;
