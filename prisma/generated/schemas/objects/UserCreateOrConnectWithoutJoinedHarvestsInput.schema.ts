import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutJoinedHarvestsInputObjectSchema } from './UserCreateWithoutJoinedHarvestsInput.schema';
import { UserUncheckedCreateWithoutJoinedHarvestsInputObjectSchema } from './UserUncheckedCreateWithoutJoinedHarvestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutJoinedHarvestsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutJoinedHarvestsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutJoinedHarvestsInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutJoinedHarvestsInputObjectSchema = Schema;
