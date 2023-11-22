import { z } from 'zod';
import { UserHarvestParticipationsCreateManyUserInputObjectSchema } from './UserHarvestParticipationsCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => UserHarvestParticipationsCreateManyUserInputObjectSchema),
        z
          .lazy(() => UserHarvestParticipationsCreateManyUserInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const UserHarvestParticipationsCreateManyUserInputEnvelopeObjectSchema =
  Schema;
