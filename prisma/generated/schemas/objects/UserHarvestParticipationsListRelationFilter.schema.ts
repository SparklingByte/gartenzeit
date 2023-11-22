import { z } from 'zod';
import { UserHarvestParticipationsWhereInputObjectSchema } from './UserHarvestParticipationsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsListRelationFilter> = z
  .object({
    every: z
      .lazy(() => UserHarvestParticipationsWhereInputObjectSchema)
      .optional(),
    some: z
      .lazy(() => UserHarvestParticipationsWhereInputObjectSchema)
      .optional(),
    none: z
      .lazy(() => UserHarvestParticipationsWhereInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserHarvestParticipationsListRelationFilterObjectSchema = Schema;
