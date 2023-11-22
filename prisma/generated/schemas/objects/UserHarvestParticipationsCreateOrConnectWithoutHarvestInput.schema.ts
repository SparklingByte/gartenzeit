import { z } from 'zod';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './UserHarvestParticipationsWhereUniqueInput.schema';
import { UserHarvestParticipationsCreateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsCreateWithoutHarvestInput.schema';
import { UserHarvestParticipationsUncheckedCreateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUncheckedCreateWithoutHarvestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsCreateOrConnectWithoutHarvestInput> =
  z
    .object({
      where: z.lazy(
        () => UserHarvestParticipationsWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () => UserHarvestParticipationsCreateWithoutHarvestInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserHarvestParticipationsUncheckedCreateWithoutHarvestInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserHarvestParticipationsCreateOrConnectWithoutHarvestInputObjectSchema =
  Schema;
