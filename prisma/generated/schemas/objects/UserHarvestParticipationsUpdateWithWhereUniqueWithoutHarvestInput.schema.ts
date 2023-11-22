import { z } from 'zod';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './UserHarvestParticipationsWhereUniqueInput.schema';
import { UserHarvestParticipationsUpdateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUpdateWithoutHarvestInput.schema';
import { UserHarvestParticipationsUncheckedUpdateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUncheckedUpdateWithoutHarvestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUpdateWithWhereUniqueWithoutHarvestInput> =
  z
    .object({
      where: z.lazy(
        () => UserHarvestParticipationsWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () => UserHarvestParticipationsUpdateWithoutHarvestInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserHarvestParticipationsUncheckedUpdateWithoutHarvestInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserHarvestParticipationsUpdateWithWhereUniqueWithoutHarvestInputObjectSchema =
  Schema;
