import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserHarvestParticipationsListRelationFilterObjectSchema } from './UserHarvestParticipationsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => HarvestWhereInputObjectSchema),
        z.lazy(() => HarvestWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => HarvestWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => HarvestWhereInputObjectSchema),
        z.lazy(() => HarvestWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    reward: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    produce: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    location: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    dateTime: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    hostUserId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    host: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    participants: z
      .lazy(() => UserHarvestParticipationsListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const HarvestWhereInputObjectSchema = Schema;
