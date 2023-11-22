import { z } from 'zod';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './UserHarvestParticipationsWhereUniqueInput.schema';
import { UserHarvestParticipationsUpdateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUpdateWithoutHarvestInput.schema';
import { UserHarvestParticipationsUncheckedUpdateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUncheckedUpdateWithoutHarvestInput.schema';
import { UserHarvestParticipationsCreateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsCreateWithoutHarvestInput.schema';
import { UserHarvestParticipationsUncheckedCreateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUncheckedCreateWithoutHarvestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUpsertWithWhereUniqueWithoutHarvestInput> =
  z
    .object({
      where: z.lazy(
        () => UserHarvestParticipationsWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () => UserHarvestParticipationsUpdateWithoutHarvestInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserHarvestParticipationsUncheckedUpdateWithoutHarvestInputObjectSchema,
        ),
      ]),
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

export const UserHarvestParticipationsUpsertWithWhereUniqueWithoutHarvestInputObjectSchema =
  Schema;
