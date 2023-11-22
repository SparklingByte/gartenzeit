import { z } from 'zod';
import { HarvestCreateWithoutHostInputObjectSchema } from './HarvestCreateWithoutHostInput.schema';
import { HarvestUncheckedCreateWithoutHostInputObjectSchema } from './HarvestUncheckedCreateWithoutHostInput.schema';
import { HarvestCreateOrConnectWithoutHostInputObjectSchema } from './HarvestCreateOrConnectWithoutHostInput.schema';
import { HarvestUpsertWithWhereUniqueWithoutHostInputObjectSchema } from './HarvestUpsertWithWhereUniqueWithoutHostInput.schema';
import { HarvestCreateManyHostInputEnvelopeObjectSchema } from './HarvestCreateManyHostInputEnvelope.schema';
import { HarvestWhereUniqueInputObjectSchema } from './HarvestWhereUniqueInput.schema';
import { HarvestUpdateWithWhereUniqueWithoutHostInputObjectSchema } from './HarvestUpdateWithWhereUniqueWithoutHostInput.schema';
import { HarvestUpdateManyWithWhereWithoutHostInputObjectSchema } from './HarvestUpdateManyWithWhereWithoutHostInput.schema';
import { HarvestScalarWhereInputObjectSchema } from './HarvestScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestUpdateManyWithoutHostNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => HarvestUpsertWithWhereUniqueWithoutHostInputObjectSchema),
        z
          .lazy(() => HarvestUpsertWithWhereUniqueWithoutHostInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => HarvestCreateManyHostInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => HarvestWhereUniqueInputObjectSchema),
        z.lazy(() => HarvestWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => HarvestWhereUniqueInputObjectSchema),
        z.lazy(() => HarvestWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => HarvestWhereUniqueInputObjectSchema),
        z.lazy(() => HarvestWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => HarvestWhereUniqueInputObjectSchema),
        z.lazy(() => HarvestWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => HarvestUpdateWithWhereUniqueWithoutHostInputObjectSchema),
        z
          .lazy(() => HarvestUpdateWithWhereUniqueWithoutHostInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => HarvestUpdateManyWithWhereWithoutHostInputObjectSchema),
        z
          .lazy(() => HarvestUpdateManyWithWhereWithoutHostInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => HarvestScalarWhereInputObjectSchema),
        z.lazy(() => HarvestScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const HarvestUpdateManyWithoutHostNestedInputObjectSchema = Schema;
