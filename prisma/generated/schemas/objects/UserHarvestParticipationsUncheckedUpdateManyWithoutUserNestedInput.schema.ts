import { z } from 'zod';
import { UserHarvestParticipationsCreateWithoutUserInputObjectSchema } from './UserHarvestParticipationsCreateWithoutUserInput.schema';
import { UserHarvestParticipationsUncheckedCreateWithoutUserInputObjectSchema } from './UserHarvestParticipationsUncheckedCreateWithoutUserInput.schema';
import { UserHarvestParticipationsCreateOrConnectWithoutUserInputObjectSchema } from './UserHarvestParticipationsCreateOrConnectWithoutUserInput.schema';
import { UserHarvestParticipationsUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserHarvestParticipationsUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserHarvestParticipationsCreateManyUserInputEnvelopeObjectSchema } from './UserHarvestParticipationsCreateManyUserInputEnvelope.schema';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './UserHarvestParticipationsWhereUniqueInput.schema';
import { UserHarvestParticipationsUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserHarvestParticipationsUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserHarvestParticipationsUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserHarvestParticipationsUpdateManyWithWhereWithoutUserInput.schema';
import { UserHarvestParticipationsScalarWhereInputObjectSchema } from './UserHarvestParticipationsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUncheckedUpdateManyWithoutUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              UserHarvestParticipationsUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsUpsertWithWhereUniqueWithoutUserInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => UserHarvestParticipationsWhereUniqueInputObjectSchema),
          z
            .lazy(() => UserHarvestParticipationsWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserHarvestParticipationsWhereUniqueInputObjectSchema),
          z
            .lazy(() => UserHarvestParticipationsWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserHarvestParticipationsWhereUniqueInputObjectSchema),
          z
            .lazy(() => UserHarvestParticipationsWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserHarvestParticipationsWhereUniqueInputObjectSchema),
          z
            .lazy(() => UserHarvestParticipationsWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserHarvestParticipationsUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              UserHarvestParticipationsUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserHarvestParticipationsScalarWhereInputObjectSchema),
          z
            .lazy(() => UserHarvestParticipationsScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const UserHarvestParticipationsUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
