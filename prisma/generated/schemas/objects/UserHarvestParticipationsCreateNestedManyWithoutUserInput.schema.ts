import { z } from 'zod';
import { UserHarvestParticipationsCreateWithoutUserInputObjectSchema } from './UserHarvestParticipationsCreateWithoutUserInput.schema';
import { UserHarvestParticipationsUncheckedCreateWithoutUserInputObjectSchema } from './UserHarvestParticipationsUncheckedCreateWithoutUserInput.schema';
import { UserHarvestParticipationsCreateOrConnectWithoutUserInputObjectSchema } from './UserHarvestParticipationsCreateOrConnectWithoutUserInput.schema';
import { UserHarvestParticipationsCreateManyUserInputEnvelopeObjectSchema } from './UserHarvestParticipationsCreateManyUserInputEnvelope.schema';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './UserHarvestParticipationsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UserHarvestParticipationsCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => UserHarvestParticipationsCreateWithoutUserInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              UserHarvestParticipationsUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              UserHarvestParticipationsCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            UserHarvestParticipationsCreateManyUserInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserHarvestParticipationsWhereUniqueInputObjectSchema),
          z
            .lazy(() => UserHarvestParticipationsWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const UserHarvestParticipationsCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
