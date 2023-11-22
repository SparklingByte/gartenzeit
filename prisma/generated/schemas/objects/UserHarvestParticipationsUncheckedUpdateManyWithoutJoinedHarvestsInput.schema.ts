import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';
import { EnumUserHarvestParticipationStatusFieldUpdateOperationsInputObjectSchema } from './EnumUserHarvestParticipationStatusFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUncheckedUpdateManyWithoutJoinedHarvestsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      harvestId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      status: z
        .union([
          z.lazy(() => UserHarvestParticipationStatusSchema),
          z.lazy(
            () =>
              EnumUserHarvestParticipationStatusFieldUpdateOperationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserHarvestParticipationsUncheckedUpdateManyWithoutJoinedHarvestsInputObjectSchema =
  Schema;
