import { z } from 'zod';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './UserHarvestParticipationsWhereUniqueInput.schema';
import { UserHarvestParticipationsUpdateWithoutUserInputObjectSchema } from './UserHarvestParticipationsUpdateWithoutUserInput.schema';
import { UserHarvestParticipationsUncheckedUpdateWithoutUserInputObjectSchema } from './UserHarvestParticipationsUncheckedUpdateWithoutUserInput.schema';
import { UserHarvestParticipationsCreateWithoutUserInputObjectSchema } from './UserHarvestParticipationsCreateWithoutUserInput.schema';
import { UserHarvestParticipationsUncheckedCreateWithoutUserInputObjectSchema } from './UserHarvestParticipationsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(
        () => UserHarvestParticipationsWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () => UserHarvestParticipationsUpdateWithoutUserInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserHarvestParticipationsUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => UserHarvestParticipationsCreateWithoutUserInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserHarvestParticipationsUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserHarvestParticipationsUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
