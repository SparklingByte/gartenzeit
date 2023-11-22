import { z } from 'zod';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './UserHarvestParticipationsWhereUniqueInput.schema';
import { UserHarvestParticipationsCreateWithoutUserInputObjectSchema } from './UserHarvestParticipationsCreateWithoutUserInput.schema';
import { UserHarvestParticipationsUncheckedCreateWithoutUserInputObjectSchema } from './UserHarvestParticipationsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(
        () => UserHarvestParticipationsWhereUniqueInputObjectSchema,
      ),
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

export const UserHarvestParticipationsCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
