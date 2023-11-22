import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumUserHarvestParticipationStatusFilterObjectSchema } from './EnumUserHarvestParticipationStatusFilter.schema';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { HarvestRelationFilterObjectSchema } from './HarvestRelationFilter.schema';
import { HarvestWhereInputObjectSchema } from './HarvestWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserHarvestParticipationsWhereInputObjectSchema),
        z.lazy(() => UserHarvestParticipationsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserHarvestParticipationsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserHarvestParticipationsWhereInputObjectSchema),
        z.lazy(() => UserHarvestParticipationsWhereInputObjectSchema).array(),
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
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    harvest: z
      .union([
        z.lazy(() => HarvestRelationFilterObjectSchema),
        z.lazy(() => HarvestWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserHarvestParticipationsWhereInputObjectSchema = Schema;
