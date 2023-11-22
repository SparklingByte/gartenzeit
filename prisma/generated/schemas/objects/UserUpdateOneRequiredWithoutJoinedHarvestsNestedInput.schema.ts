import { z } from 'zod';
import { UserCreateWithoutJoinedHarvestsInputObjectSchema } from './UserCreateWithoutJoinedHarvestsInput.schema';
import { UserUncheckedCreateWithoutJoinedHarvestsInputObjectSchema } from './UserUncheckedCreateWithoutJoinedHarvestsInput.schema';
import { UserCreateOrConnectWithoutJoinedHarvestsInputObjectSchema } from './UserCreateOrConnectWithoutJoinedHarvestsInput.schema';
import { UserUpsertWithoutJoinedHarvestsInputObjectSchema } from './UserUpsertWithoutJoinedHarvestsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutJoinedHarvestsInputObjectSchema } from './UserUpdateWithoutJoinedHarvestsInput.schema';
import { UserUncheckedUpdateWithoutJoinedHarvestsInputObjectSchema } from './UserUncheckedUpdateWithoutJoinedHarvestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutJoinedHarvestsNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutJoinedHarvestsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutJoinedHarvestsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutJoinedHarvestsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutJoinedHarvestsNestedInputObjectSchema =
  Schema;
