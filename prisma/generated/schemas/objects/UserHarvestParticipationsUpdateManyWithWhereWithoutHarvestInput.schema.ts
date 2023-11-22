import { z } from 'zod';
import { UserHarvestParticipationsScalarWhereInputObjectSchema } from './UserHarvestParticipationsScalarWhereInput.schema';
import { UserHarvestParticipationsUpdateManyMutationInputObjectSchema } from './UserHarvestParticipationsUpdateManyMutationInput.schema';
import { UserHarvestParticipationsUncheckedUpdateManyWithoutParticipantsInputObjectSchema } from './UserHarvestParticipationsUncheckedUpdateManyWithoutParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUpdateManyWithWhereWithoutHarvestInput> =
  z
    .object({
      where: z.lazy(
        () => UserHarvestParticipationsScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () => UserHarvestParticipationsUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserHarvestParticipationsUncheckedUpdateManyWithoutParticipantsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserHarvestParticipationsUpdateManyWithWhereWithoutHarvestInputObjectSchema =
  Schema;
