import { z } from 'zod';
import { UserCreateWithoutJoinedHarvestsInputObjectSchema } from './UserCreateWithoutJoinedHarvestsInput.schema';
import { UserUncheckedCreateWithoutJoinedHarvestsInputObjectSchema } from './UserUncheckedCreateWithoutJoinedHarvestsInput.schema';
import { UserCreateOrConnectWithoutJoinedHarvestsInputObjectSchema } from './UserCreateOrConnectWithoutJoinedHarvestsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutJoinedHarvestsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutJoinedHarvestsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutJoinedHarvestsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutJoinedHarvestsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutJoinedHarvestsInputObjectSchema = Schema;
