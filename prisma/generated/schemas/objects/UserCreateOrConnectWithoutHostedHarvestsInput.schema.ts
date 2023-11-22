import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutHostedHarvestsInputObjectSchema } from './UserCreateWithoutHostedHarvestsInput.schema';
import { UserUncheckedCreateWithoutHostedHarvestsInputObjectSchema } from './UserUncheckedCreateWithoutHostedHarvestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutHostedHarvestsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutHostedHarvestsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutHostedHarvestsInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutHostedHarvestsInputObjectSchema = Schema;
