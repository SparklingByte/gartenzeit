import { z } from 'zod';
import { HarvestScalarWhereInputObjectSchema } from './HarvestScalarWhereInput.schema';
import { HarvestUpdateManyMutationInputObjectSchema } from './HarvestUpdateManyMutationInput.schema';
import { HarvestUncheckedUpdateManyWithoutHostedHarvestsInputObjectSchema } from './HarvestUncheckedUpdateManyWithoutHostedHarvestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestUpdateManyWithWhereWithoutHostInput> = z
  .object({
    where: z.lazy(() => HarvestScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => HarvestUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => HarvestUncheckedUpdateManyWithoutHostedHarvestsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const HarvestUpdateManyWithWhereWithoutHostInputObjectSchema = Schema;
