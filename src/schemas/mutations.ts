import { z } from 'zod';

import { basketSchema } from './books';

export const addBookToCartSchema = z.object({
  addBookToCart: basketSchema
});

export type AddBookToCartMutation = z.infer<typeof addBookToCartSchema>;
