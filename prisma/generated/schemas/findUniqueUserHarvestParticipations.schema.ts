import { z } from 'zod';
import { UserHarvestParticipationsWhereUniqueInputObjectSchema } from './objects/UserHarvestParticipationsWhereUniqueInput.schema';

export const UserHarvestParticipationsFindUniqueSchema = z.object({
  where: UserHarvestParticipationsWhereUniqueInputObjectSchema,
});
