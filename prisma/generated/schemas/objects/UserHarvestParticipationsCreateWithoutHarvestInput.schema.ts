import { z } from 'zod';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';
import { UserCreateNestedOneWithoutJoinedHarvestsInputObjectSchema } from './UserCreateNestedOneWithoutJoinedHarvestsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsCreateWithoutHarvestInput> =
  z
    .object({
      id: z.string().optional(),
      status: z.lazy(() => UserHarvestParticipationStatusSchema).optional(),
      user: z.lazy(
        () => UserCreateNestedOneWithoutJoinedHarvestsInputObjectSchema,
      ),
    })
    .strict();

export const UserHarvestParticipationsCreateWithoutHarvestInputObjectSchema =
  Schema;
