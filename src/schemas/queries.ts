import { z } from 'zod';

import { bookWithDetailsSchema, bookWithRelationsSchema } from './books';

export const allBooksSchema = z.object({
  allBooks: z.array(bookWithRelationsSchema)
});

export type AllBooksQuery = z.infer<typeof allBooksSchema>;

export const bookByIdSchema = z.object({
  bookById: bookWithDetailsSchema
});

export type BookByIdQuery = z.infer<typeof bookByIdSchema>;

export const addBookToCartSchema = z.object({
  addBookToCart: z.object({
    id: z.string(),
    user: z.object({
      id: z.string()
    }),
    books: z.array(
      z.object({
        book: bookWithDetailsSchema.pick({
          id: true,
          title: true,
          price: true
        }),
        quantity: z.number()
      })
    )
  })
});

export type AddBookToCartMutation = z.infer<typeof addBookToCartSchema>;
