import { z } from 'zod';
import { HarvestWhereUniqueInputObjectSchema } from './HarvestWhereUniqueInput.schema';
import { HarvestCreateWithoutParticipantsInputObjectSchema } from './HarvestCreateWithoutParticipantsInput.schema';
import { HarvestUncheckedCreateWithoutParticipantsInputObjectSchema } from './HarvestUncheckedCreateWithoutParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestCreateOrConnectWithoutParticipantsInput> =
  z
    .object({
      where: z.lazy(() => HarvestWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => HarvestCreateWithoutParticipantsInputObjectSchema),
        z.lazy(
          () => HarvestUncheckedCreateWithoutParticipantsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const HarvestCreateOrConnectWithoutParticipantsInputObjectSchema =
  Schema;
