import { z } from 'zod';
import { HarvestWhereUniqueInputObjectSchema } from './HarvestWhereUniqueInput.schema';
import { HarvestUpdateWithoutHostInputObjectSchema } from './HarvestUpdateWithoutHostInput.schema';
import { HarvestUncheckedUpdateWithoutHostInputObjectSchema } from './HarvestUncheckedUpdateWithoutHostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestUpdateWithWhereUniqueWithoutHostInput> = z
  .object({
    where: z.lazy(() => HarvestWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => HarvestUpdateWithoutHostInputObjectSchema),
      z.lazy(() => HarvestUncheckedUpdateWithoutHostInputObjectSchema),
    ]),
  })
  .strict();

export const HarvestUpdateWithWhereUniqueWithoutHostInputObjectSchema = Schema;
