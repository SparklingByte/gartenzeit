import { z } from 'zod';
import { UserHarvestParticipationsCreateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsCreateWithoutHarvestInput.schema';
import { UserHarvestParticipationsUncheckedCreateWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsUncheckedCreateWithoutHarvestInput.schema';
import { UserHarvestParticipationsCreateOrConnectWithoutHarvestInputObjectSchema } from './UserHarvestParticipationsCreateOrConnectWithoutHarvestInput.schema';
import { UserHarvestParticipationsCreateManyHarvestInputEnvelopeObjectSchema } from './UserHarvestParticipationsCreateManyHarvestInputEnvelope.schema';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './UserHarvestParticipationsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHarvestParticipationsCreateNestedManyWithoutHarvestInput> =
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
      createMany: z
        .lazy(
          () =>
            UserHarvestParticipationsCreateManyHarvestInputEnvelopeObjectSchema,
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

export const UserHarvestParticipationsCreateNestedManyWithoutHarvestInputObjectSchema =
  Schema;
