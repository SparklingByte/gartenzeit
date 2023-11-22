import { z } from 'zod';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumUserHarvestParticipationStatusFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => UserHarvestParticipationStatusSchema).optional(),
    })
    .strict();

export const EnumUserHarvestParticipationStatusFieldUpdateOperationsInputObjectSchema =
  Schema;
