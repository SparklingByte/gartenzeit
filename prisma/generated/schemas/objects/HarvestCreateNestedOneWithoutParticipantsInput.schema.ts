import { z } from 'zod';
import { HarvestCreateWithoutParticipantsInputObjectSchema } from './HarvestCreateWithoutParticipantsInput.schema';
import { HarvestUncheckedCreateWithoutParticipantsInputObjectSchema } from './HarvestUncheckedCreateWithoutParticipantsInput.schema';
import { HarvestCreateOrConnectWithoutParticipantsInputObjectSchema } from './HarvestCreateOrConnectWithoutParticipantsInput.schema';
import { HarvestWhereUniqueInputObjectSchema } from './HarvestWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestCreateNestedOneWithoutParticipantsInput> =
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
      connect: z.lazy(() => HarvestWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const HarvestCreateNestedOneWithoutParticipantsInputObjectSchema =
  Schema;
