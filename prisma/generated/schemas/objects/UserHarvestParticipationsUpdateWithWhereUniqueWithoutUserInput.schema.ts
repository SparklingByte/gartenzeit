import { z } from 'zod';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './UserHarvestParticipationsWhereUniqueInput.schema';
import { UserHarvestParticipationsUpdateWithoutUserInputObjectSchema } from './UserHarvestParticipationsUpdateWithoutUserInput.schema';
import { UserHarvestParticipationsUncheckedUpdateWithoutUserInputObjectSchema } from './UserHarvestParticipationsUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(
        () => UserHarvestParticipationsWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () => UserHarvestParticipationsUpdateWithoutUserInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserHarvestParticipationsUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserHarvestParticipationsUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
