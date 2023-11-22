import { z } from 'zod';
import { HarvestCreateWithoutHostInputObjectSchema } from './HarvestCreateWithoutHostInput.schema';
import { HarvestUncheckedCreateWithoutHostInputObjectSchema } from './HarvestUncheckedCreateWithoutHostInput.schema';
import { HarvestCreateOrConnectWithoutHostInputObjectSchema } from './HarvestCreateOrConnectWithoutHostInput.schema';
import { HarvestCreateManyHostInputEnvelopeObjectSchema } from './HarvestCreateManyHostInputEnvelope.schema';
import { HarvestWhereUniqueInputObjectSchema } from './HarvestWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestUncheckedCreateNestedManyWithoutHostInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => HarvestCreateWithoutHostInputObjectSchema),
          z.lazy(() => HarvestCreateWithoutHostInputObjectSchema).array(),
          z.lazy(() => HarvestUncheckedCreateWithoutHostInputObjectSchema),
          z
            .lazy(() => HarvestUncheckedCreateWithoutHostInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => HarvestCreateOrConnectWithoutHostInputObjectSchema),
          z
            .lazy(() => HarvestCreateOrConnectWithoutHostInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => HarvestCreateManyHostInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => HarvestWhereUniqueInputObjectSchema),
          z.lazy(() => HarvestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const HarvestUncheckedCreateNestedManyWithoutHostInputObjectSchema =
  Schema;
