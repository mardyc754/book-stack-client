import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username is too short' })
    .max(20, { message: 'Username is too long' }),
  password: z
    .string()
    .min(8, { message: 'Password is too short' })
    .max(32, { message: 'Password is too long' })
});

export type LoginData = z.infer<typeof loginFormSchema>;

export const loginFormResolver = zodResolver(loginFormSchema);

export const loginResponseSchema = z.object({
  login: z.object({
    id: z.string(),
    username: z.string()
  })
});
