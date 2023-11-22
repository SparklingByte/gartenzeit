import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { HarvestCreateNestedManyWithoutHostInputObjectSchema } from './HarvestCreateNestedManyWithoutHostInput.schema';
import { UserHarvestParticipationsCreateNestedManyWithoutUserInputObjectSchema } from './UserHarvestParticipationsCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
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
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    hostedHarvests: z
      .lazy(() => HarvestCreateNestedManyWithoutHostInputObjectSchema)
      .optional(),
    joinedHarvests: z
      .lazy(
        () =>
          UserHarvestParticipationsCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
