import { z } from 'zod';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      harvestId: z.string(),
      status: z.lazy(() => UserHarvestParticipationStatusSchema).optional(),
    })
    .strict();

export const UserHarvestParticipationsUncheckedCreateWithoutUserInputObjectSchema =
  Schema;
