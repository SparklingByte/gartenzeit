import { z } from 'zod';
import { UserUpdateWithoutJoinedHarvestsInputObjectSchema } from './UserUpdateWithoutJoinedHarvestsInput.schema';
import { UserUncheckedUpdateWithoutJoinedHarvestsInputObjectSchema } from './UserUncheckedUpdateWithoutJoinedHarvestsInput.schema';
import { UserCreateWithoutJoinedHarvestsInputObjectSchema } from './UserCreateWithoutJoinedHarvestsInput.schema';
import { UserUncheckedCreateWithoutJoinedHarvestsInputObjectSchema } from './UserUncheckedCreateWithoutJoinedHarvestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutJoinedHarvestsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutJoinedHarvestsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutJoinedHarvestsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutJoinedHarvestsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutJoinedHarvestsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutJoinedHarvestsInputObjectSchema = Schema;
