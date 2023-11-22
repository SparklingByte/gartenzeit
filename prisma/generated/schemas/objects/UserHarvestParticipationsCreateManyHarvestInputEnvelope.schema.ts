import { z } from 'zod';
import { UserHarvestParticipationsCreateManyHarvestInputObjectSchema } from './UserHarvestParticipationsCreateManyHarvestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsCreateManyHarvestInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => UserHarvestParticipationsCreateManyHarvestInputObjectSchema,
        ),
        z
          .lazy(
            () => UserHarvestParticipationsCreateManyHarvestInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const UserHarvestParticipationsCreateManyHarvestInputEnvelopeObjectSchema =
  Schema;
