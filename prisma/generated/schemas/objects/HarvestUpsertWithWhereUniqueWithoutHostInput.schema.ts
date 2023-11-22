import { z } from 'zod';
import { HarvestWhereUniqueInputObjectSchema } from './HarvestWhereUniqueInput.schema';
import { HarvestUpdateWithoutHostInputObjectSchema } from './HarvestUpdateWithoutHostInput.schema';
import { HarvestUncheckedUpdateWithoutHostInputObjectSchema } from './HarvestUncheckedUpdateWithoutHostInput.schema';
import { HarvestCreateWithoutHostInputObjectSchema } from './HarvestCreateWithoutHostInput.schema';
import { HarvestUncheckedCreateWithoutHostInputObjectSchema } from './HarvestUncheckedCreateWithoutHostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestUpsertWithWhereUniqueWithoutHostInput> = z
  .object({
    where: z.lazy(() => HarvestWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => HarvestUpdateWithoutHostInputObjectSchema),
      z.lazy(() => HarvestUncheckedUpdateWithoutHostInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => HarvestCreateWithoutHostInputObjectSchema),
      z.lazy(() => HarvestUncheckedCreateWithoutHostInputObjectSchema),
    ]),
  })
  .strict();

export const HarvestUpsertWithWhereUniqueWithoutHostInputObjectSchema = Schema;
