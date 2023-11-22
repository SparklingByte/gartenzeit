import { z } from 'zod';
import { UserCreateWithoutHostedHarvestsInputObjectSchema } from './UserCreateWithoutHostedHarvestsInput.schema';
import { UserUncheckedCreateWithoutHostedHarvestsInputObjectSchema } from './UserUncheckedCreateWithoutHostedHarvestsInput.schema';
import { UserCreateOrConnectWithoutHostedHarvestsInputObjectSchema } from './UserCreateOrConnectWithoutHostedHarvestsInput.schema';
import { UserUpsertWithoutHostedHarvestsInputObjectSchema } from './UserUpsertWithoutHostedHarvestsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutHostedHarvestsInputObjectSchema } from './UserUpdateWithoutHostedHarvestsInput.schema';
import { UserUncheckedUpdateWithoutHostedHarvestsInputObjectSchema } from './UserUncheckedUpdateWithoutHostedHarvestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutHostedHarvestsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutHostedHarvestsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutHostedHarvestsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutHostedHarvestsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutHostedHarvestsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutHostedHarvestsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutHostedHarvestsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutHostedHarvestsNestedInputObjectSchema =
  Schema;
