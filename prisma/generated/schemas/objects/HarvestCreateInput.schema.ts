import { z } from 'zod';
import { UserCreateNestedOneWithoutHostedHarvestsInputObjectSchema } from './UserCreateNestedOneWithoutHostedHarvestsInput.schema';
import { UserHarvestParticipationsCreateNestedManyWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsCreateNestedManyWithoutHarvestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestCreateInput> = z
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
    participants: z
      .lazy(
        () =>
          UserHarvestParticipationsCreateNestedManyWithoutHarvestInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const HarvestCreateInputObjectSchema = Schema;
