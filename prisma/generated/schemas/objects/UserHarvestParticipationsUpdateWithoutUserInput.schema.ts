import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';
import { EnumUserHarvestParticipationStatusFieldUpdateOperationsInputObjectSchema } from './EnumUserHarvestParticipationStatusFieldUpdateOperationsInput.schema';
import { HarvestUpdateOneRequiredWithoutParticipantsNestedInputObjectSchema } from './HarvestUpdateOneRequiredWithoutParticipantsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUpdateWithoutUserInput> =
  z
    .object({
      id: z
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
      harvest: z
        .lazy(
          () =>
            HarvestUpdateOneRequiredWithoutParticipantsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserHarvestParticipationsUpdateWithoutUserInputObjectSchema =
  Schema;
