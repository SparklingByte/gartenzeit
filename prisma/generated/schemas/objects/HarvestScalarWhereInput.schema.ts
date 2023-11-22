import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => HarvestScalarWhereInputObjectSchema),
        z.lazy(() => HarvestScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => HarvestScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => HarvestScalarWhereInputObjectSchema),
        z.lazy(() => HarvestScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const HarvestScalarWhereInputObjectSchema = Schema;
