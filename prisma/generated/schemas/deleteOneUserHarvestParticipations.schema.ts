import { z } from 'zod';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './objects/UserHarvestParticipationsWhereUniqueInput.schema';

export const UserHarvestParticipationsDeleteOneSchema = z.object({
  where: UserHarvestParticipationsWhereUniqueInputObjectSchema,
});
