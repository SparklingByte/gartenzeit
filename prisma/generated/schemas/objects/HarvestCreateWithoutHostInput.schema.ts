import { z } from 'zod';
import { UserHarvestParticipationsCreateNestedManyWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsCreateNestedManyWithoutHarvestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestCreateWithoutHostInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    reward: z.string(),
    produce: z.string(),
    location: z.string(),
    dateTime: z.coerce.date(),
    participants: z
      .lazy(
        () =>
          UserHarvestParticipationsCreateNestedManyWithoutHarvestInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const HarvestCreateWithoutHostInputObjectSchema = Schema;
