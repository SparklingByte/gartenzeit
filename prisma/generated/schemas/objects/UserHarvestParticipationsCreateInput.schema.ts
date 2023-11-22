import { z } from 'zod';
import { UserHarvestParticipationStatusSchema } from '../enums/UserHarvestParticipationStatus.schema';
import { UserCreateNestedOneWithoutJoinedHarvestsInputObjectSchema } from './UserCreateNestedOneWithoutJoinedHarvestsInput.schema';
import { HarvestCreateNestedOneWithoutParticipantsInputObjectSchema } from './HarvestCreateNestedOneWithoutParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsCreateInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => UserHarvestParticipationStatusSchema).optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutJoinedHarvestsInputObjectSchema,
    ),
    harvest: z.lazy(
      () => HarvestCreateNestedOneWithoutParticipantsInputObjectSchema,
    ),
  })
  .strict();

export const UserHarvestParticipationsCreateInputObjectSchema = Schema;
