import { z } from 'zod';
import { HarvestWhereUniqueInputObjectSchema } from './HarvestWhereUniqueInput.schema';
import { HarvestCreateWithoutHostInputObjectSchema } from './HarvestCreateWithoutHostInput.schema';
import { HarvestUncheckedCreateWithoutHostInputObjectSchema } from './HarvestUncheckedCreateWithoutHostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestCreateOrConnectWithoutHostInput> = z
  .object({
    where: z.lazy(() => HarvestWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => HarvestCreateWithoutHostInputObjectSchema),
      z.lazy(() => HarvestUncheckedCreateWithoutHostInputObjectSchema),
    ]),
  })
  .strict();

export const HarvestCreateOrConnectWithoutHostInputObjectSchema = Schema;
