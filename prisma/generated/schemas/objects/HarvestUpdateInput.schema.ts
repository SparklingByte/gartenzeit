import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutHostedHarvestsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutHostedHarvestsNestedInput.schema';
import { UserHarvestParticipationsUpdateManyWithoutHarvestNestedInputObjectSchema } from './UserHarvestParticipationsUpdateManyWithoutHarvestNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    reward: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    produce: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    location: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    dateTime: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    host: z
      .lazy(
        () => UserUpdateOneRequiredWithoutHostedHarvestsNestedInputObjectSchema,
      )
      .optional(),
    participants: z
      .lazy(
        () =>
          UserHarvestParticipationsUpdateManyWithoutHarvestNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const HarvestUpdateInputObjectSchema = Schema;
