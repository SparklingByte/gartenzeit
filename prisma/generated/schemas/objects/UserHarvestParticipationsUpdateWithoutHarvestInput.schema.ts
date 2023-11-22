import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';
import { EnumUserHarvestParticipationStatusFieldUpdateOperationsInputObjectSchema } from './EnumUserHarvestParticipationStatusFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutJoinedHarvestsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutJoinedHarvestsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUpdateWithoutHarvestInput> =
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
      user: z
        .lazy(
          () =>
            UserUpdateOneRequiredWithoutJoinedHarvestsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserHarvestParticipationsUpdateWithoutHarvestInputObjectSchema =
  Schema;
