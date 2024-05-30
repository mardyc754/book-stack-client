import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const registrationFormSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: 'Username is too short' })
      .max(20, { message: 'Username is too long' }),
    email: z.string().email().min(1, { message: 'Email is required' }),
    password: z
      .string()
      .min(8, { message: 'Password is too short' })
      .max(32, { message: 'Password is too long' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password is too short' })
      .max(32, { message: 'Password is too large' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword']
  });

export const registrationFormResolver = zodResolver(registrationFormSchema);
