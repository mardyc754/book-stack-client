import { z } from 'zod';

import {
  authorSchema,
  basketSchema,
  bookWithDetailsSchema,
  bookWithRelationsSchema,
  boughtBookSchema,
  categorySchema,
  publisherSchema
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

export const allAuthorsSchema = z.object({
  allAuthors: authorSchema.array()
});

export type AllAuthorsQuery = z.infer<typeof allAuthorsSchema>;

export const allCategoriesSchema = z.object({
  allCategories: categorySchema.array()
});

export type AllCategoriesQuery = z.infer<typeof allCategoriesSchema>;

export const allPublishersSchema = z.object({
  allPublishers: publisherSchema.array()
});

export type AllPublishersQuery = z.infer<typeof allPublishersSchema>;
