import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  age: z.number().positive(),
});

export type User = z.infer<typeof UserSchema>;
