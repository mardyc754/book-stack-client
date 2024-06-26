import { z } from 'zod';

import {
  basketSchema,
  bookWithDetailsSchema,
  bookWithRelationsSchema,
  boughtBookSchema
} from './books';

export const allBooksSchema = z.object({
  allBooks: z.array(bookWithRelationsSchema)
});

export type AllBooksQuery = z.infer<typeof allBooksSchema>;

export const bookByIdSchema = z.object({
  bookById: bookWithDetailsSchema
});

export type BookByIdQuery = z.infer<typeof bookByIdSchema>;

export const basketByUserIdSchema = z.object({
  basketByUserId: z.nullable(basketSchema)
});

export type BasketByUserIdQuery = z.infer<typeof basketByUserIdSchema>;

export const boughtBooksByUserIdSchema = z.object({
  boughtBooksByUserId: boughtBookSchema.array()
});

export type BoughtBooksByUserIdQuery = z.infer<
  typeof boughtBooksByUserIdSchema
>;
