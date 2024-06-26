import { z } from 'zod';

import { basketSchema, bookSchema } from './books';

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

export const buyBooksSchema = z.object({
  buyBooks: basketSchema.omit({ books: true })
});

export type BuyBooksMutation = z.infer<typeof buyBooksSchema>;

export const addBookToStockSchema = z.object({
  addBookToStock: bookSchema
});

export type AddBookToStockMutation = z.infer<typeof addBookToStockSchema>;

export const changeBookPriceSchema = z.object({
  changeBookPrice: bookSchema
});

export type ChangeBookPriceMutation = z.infer<typeof changeBookPriceSchema>;
