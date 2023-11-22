import { z } from 'zod';
import { UserCreateNestedOneWithoutHostedHarvestsInputObjectSchema } from './UserCreateNestedOneWithoutHostedHarvestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestCreateWithoutParticipantsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    reward: z.string(),
    produce: z.string(),
    location: z.string(),
    dateTime: z.coerce.date(),
    host: z.lazy(
      () => UserCreateNestedOneWithoutHostedHarvestsInputObjectSchema,
    ),
  })
  .strict();

export const HarvestCreateWithoutParticipantsInputObjectSchema = Schema;
