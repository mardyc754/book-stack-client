import { z } from 'zod';

import { basketSchema } from './books';

export const addBookToCartSchema = z.object({
  addBookToCart: basketSchema
});

export type AddBookToCartMutation = z.infer<typeof addBookToCartSchema>;

export const changeBookQuantityInCartSchema = z.object({
  changeBookQuantityInCart: basketSchema
});

export type ChangeBookQuantityInCartMutation = z.infer<
  typeof changeBookQuantityInCartSchema
>;

export const removeBookFromCartSchema = z.object({
  removeBookFromCart: basketSchema
});

export type RemoveBookFromCartMutation = z.infer<
  typeof removeBookFromCartSchema
>;
