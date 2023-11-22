import { z } from 'zod';
import { UserHarvestParticipationsUncheckedCreateNestedManyWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUncheckedCreateNestedManyWithoutHarvestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HarvestUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    reward: z.string(),
    produce: z.string(),
    location: z.string(),
    dateTime: z.coerce.date(),
    hostUserId: z.string(),
    participants: z
      .lazy(
        () =>
          UserHarvestParticipationsUncheckedCreateNestedManyWithoutHarvestInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const HarvestUncheckedCreateInputObjectSchema = Schema;
