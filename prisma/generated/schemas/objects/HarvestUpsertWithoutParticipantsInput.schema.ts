import { z } from 'zod';
import { HarvestUpdateWithoutParticipantsInputObjectSchema } from './HarvestUpdateWithoutParticipantsInput.schema';
import { HarvestUncheckedUpdateWithoutParticipantsInputObjectSchema } from './HarvestUncheckedUpdateWithoutParticipantsInput.schema';
import { HarvestCreateWithoutParticipantsInputObjectSchema } from './HarvestCreateWithoutParticipantsInput.schema';
import { HarvestUncheckedCreateWithoutParticipantsInputObjectSchema } from './HarvestUncheckedCreateWithoutParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestUpsertWithoutParticipantsInput> = z
  .object({
    update: z.union([
      z.lazy(() => HarvestUpdateWithoutParticipantsInputObjectSchema),
      z.lazy(() => HarvestUncheckedUpdateWithoutParticipantsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => HarvestCreateWithoutParticipantsInputObjectSchema),
      z.lazy(() => HarvestUncheckedCreateWithoutParticipantsInputObjectSchema),
    ]),
  })
  .strict();

export const HarvestUpsertWithoutParticipantsInputObjectSchema = Schema;
