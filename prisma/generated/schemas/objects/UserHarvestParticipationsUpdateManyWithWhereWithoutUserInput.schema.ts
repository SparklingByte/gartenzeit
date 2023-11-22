import { z } from 'zod';
import { UserHarvestParticipationsScalarWhereInputObjectSchema } from './UserHarvestParticipationsScalarWhereInput.schema';
import { UserHarvestParticipationsUpdateManyMutationInputObjectSchema } from './UserHarvestParticipationsUpdateManyMutationInput.schema';
import { UserHarvestParticipationsUncheckedUpdateManyWithoutJoinedHarvestsInputObjectSchema } from './UserHarvestParticipationsUncheckedUpdateManyWithoutJoinedHarvestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUpdateManyWithWhereWithoutUserInput> =
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
            UserHarvestParticipationsUncheckedUpdateManyWithoutJoinedHarvestsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserHarvestParticipationsUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
