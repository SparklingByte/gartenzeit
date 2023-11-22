import { z } from 'zod';
import { UserUpdateWithoutHostedHarvestsInputObjectSchema } from './UserUpdateWithoutHostedHarvestsInput.schema';
import { UserUncheckedUpdateWithoutHostedHarvestsInputObjectSchema } from './UserUncheckedUpdateWithoutHostedHarvestsInput.schema';
import { UserCreateWithoutHostedHarvestsInputObjectSchema } from './UserCreateWithoutHostedHarvestsInput.schema';
import { UserUncheckedCreateWithoutHostedHarvestsInputObjectSchema } from './UserUncheckedCreateWithoutHostedHarvestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutHostedHarvestsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutHostedHarvestsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutHostedHarvestsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutHostedHarvestsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutHostedHarvestsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutHostedHarvestsInputObjectSchema = Schema;
