import { z } from 'zod';
import { UserHarvestParticipationsCreateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsCreateWithoutHarvestInput.schema';
import { UserHarvestParticipationsUncheckedCreateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUncheckedCreateWithoutHarvestInput.schema';
import { UserHarvestParticipationsCreateOrConnectWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsCreateOrConnectWithoutHarvestInput.schema';
import { UserHarvestParticipationsUpsertWithWhereUniqueWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUpsertWithWhereUniqueWithoutHarvestInput.schema';
import { UserHarvestParticipationsCreateManyHarvestInputEnvelopeObjectSchema } from './UserHarvestParticipationsCreateManyHarvestInputEnvelope.schema';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './UserHarvestParticipationsWhereUniqueInput.schema';
import { UserHarvestParticipationsUpdateWithWhereUniqueWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUpdateWithWhereUniqueWithoutHarvestInput.schema';
import { UserHarvestParticipationsUpdateManyWithWhereWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUpdateManyWithWhereWithoutHarvestInput.schema';
import { UserHarvestParticipationsScalarWhereInputObjectSchema } from './UserHarvestParticipationsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsUncheckedUpdateManyWithoutHarvestNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserHarvestParticipationsCreateWithoutHarvestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsCreateWithoutHarvestInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              UserHarvestParticipationsUncheckedCreateWithoutHarvestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsUncheckedCreateWithoutHarvestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              UserHarvestParticipationsCreateOrConnectWithoutHarvestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsCreateOrConnectWithoutHarvestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              UserHarvestParticipationsUpsertWithWhereUniqueWithoutHarvestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsUpsertWithWhereUniqueWithoutHarvestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            UserHarvestParticipationsCreateManyHarvestInputEnvelopeObjectSchema,
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
              UserHarvestParticipationsUpdateWithWhereUniqueWithoutHarvestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsUpdateWithWhereUniqueWithoutHarvestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              UserHarvestParticipationsUpdateManyWithWhereWithoutHarvestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHarvestParticipationsUpdateManyWithWhereWithoutHarvestInputObjectSchema,
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

export const UserHarvestParticipationsUncheckedUpdateManyWithoutHarvestNestedInputObjectSchema =
  Schema;
