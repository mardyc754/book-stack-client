import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const roleSchema = z.enum(['USER', 'ADMIN']);

export type UserRole = z.infer<typeof roleSchema>;

export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  role: roleSchema
});

export type User = z.infer<typeof userSchema>;

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
    username: z.string(),
    role: roleSchema
  })
});

export type LoginResponse = z.infer<typeof loginResponseSchema>;

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

export type RegistrationData = z.infer<typeof registrationFormSchema>;

export const registrationFormResolver = zodResolver(registrationFormSchema);

export const registationResponseSchema = z.object({
  register: z.object({
    id: z.string(),
    username: z.string(),
    role: roleSchema
  })
});

export type RegistrationResponse = z.infer<typeof registationResponseSchema>;

export const logoutResponseSchema = z.object({
  logout: z.boolean()
});

export type LogoutResponse = z.infer<typeof logoutResponseSchema>;

export const currentUserSchema = z.object({
  currentUser: z.object({
    id: z.string(),
    username: z.string(),
    role: roleSchema
  })
});

export type CurrentUserQuery = z.infer<typeof currentUserSchema>;
