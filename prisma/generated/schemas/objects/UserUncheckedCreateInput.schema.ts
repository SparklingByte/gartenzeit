import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { HarvestUncheckedCreateNestedManyWithoutHostInputObjectSchema } from './HarvestUncheckedCreateNestedManyWithoutHostInput.schema';
import { UserHarvestParticipationsUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserHarvestParticipationsUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
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
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    hostedHarvests: z
      .lazy(() => HarvestUncheckedCreateNestedManyWithoutHostInputObjectSchema)
      .optional(),
    joinedHarvests: z
      .lazy(
        () =>
          UserHarvestParticipationsUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
