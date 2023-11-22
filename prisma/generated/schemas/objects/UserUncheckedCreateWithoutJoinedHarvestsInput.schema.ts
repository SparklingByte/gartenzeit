import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { HarvestUncheckedCreateNestedManyWithoutHostInputObjectSchema } from './HarvestUncheckedCreateNestedManyWithoutHostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutJoinedHarvestsInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string().optional().nullable(),
      username: z.string(),
      email: z.string(),
      encrypted_password: z.string().optional().nullable(),
      emailVerified: z.coerce.date().optional().nullable(),
      image: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      accounts: z
        .lazy(
          () => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      sessions: z
        .lazy(
          () => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      hostedHarvests: z
        .lazy(
          () => HarvestUncheckedCreateNestedManyWithoutHostInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutJoinedHarvestsInputObjectSchema = Schema;
