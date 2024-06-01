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

export const currentUserSchema = z.object({
  currentUser: z.object({
    id: z.string(),
    username: z.string()
  })
});

export type CurrentUserQuery = z.infer<typeof currentUserSchema>;
