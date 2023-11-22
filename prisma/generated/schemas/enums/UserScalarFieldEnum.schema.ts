import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'username',
  'email',
  'encrypted_password',
  'emailVerified',
  'image',
  'location',
  'description',
]);
