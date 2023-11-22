import { z } from 'zod';
import { HarvestCreateWithoutParticipantsInputObjectSchema } from './HarvestCreateWithoutParticipantsInput.schema';
import { HarvestUncheckedCreateWithoutParticipantsInputObjectSchema } from './HarvestUncheckedCreateWithoutParticipantsInput.schema';
import { HarvestCreateOrConnectWithoutParticipantsInputObjectSchema } from './HarvestCreateOrConnectWithoutParticipantsInput.schema';
import { HarvestUpsertWithoutParticipantsInputObjectSchema } from './HarvestUpsertWithoutParticipantsInput.schema';
import { HarvestWhereUniqueInputObjectSchema } from './HarvestWhereUniqueInput.schema';
import { HarvestUpdateWithoutParticipantsInputObjectSchema } from './HarvestUpdateWithoutParticipantsInput.schema';
import { HarvestUncheckedUpdateWithoutParticipantsInputObjectSchema } from './HarvestUncheckedUpdateWithoutParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestUpdateOneRequiredWithoutParticipantsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HarvestCreateWithoutParticipantsInputObjectSchema),
          z.lazy(
            () => HarvestUncheckedCreateWithoutParticipantsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => HarvestCreateOrConnectWithoutParticipantsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => HarvestUpsertWithoutParticipantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => HarvestWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => HarvestUpdateWithoutParticipantsInputObjectSchema),
          z.lazy(
            () => HarvestUncheckedUpdateWithoutParticipantsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const HarvestUpdateOneRequiredWithoutParticipantsNestedInputObjectSchema =
  Schema;
