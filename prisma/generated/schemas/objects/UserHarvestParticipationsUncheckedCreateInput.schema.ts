import { z } from 'zod';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      harvestId: z.string(),
      status: z.lazy(() => UserHarvestParticipationStatusSchema).optional(),
    })
    .strict();

export const UserHarvestParticipationsUncheckedCreateInputObjectSchema = Schema;
