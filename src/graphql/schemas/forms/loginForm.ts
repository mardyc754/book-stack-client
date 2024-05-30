import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const loginFormSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8).max(32)
});

export const loginFormResolver = zodResolver(loginFormSchema);
