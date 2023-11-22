import { z } from 'zod';
import { UserCreateWithoutHostedHarvestsInputObjectSchema } from './UserCreateWithoutHostedHarvestsInput.schema';
import { UserUncheckedCreateWithoutHostedHarvestsInputObjectSchema } from './UserUncheckedCreateWithoutHostedHarvestsInput.schema';
import { UserCreateOrConnectWithoutHostedHarvestsInputObjectSchema } from './UserCreateOrConnectWithoutHostedHarvestsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutHostedHarvestsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutHostedHarvestsInputObjectSchema = Schema;
