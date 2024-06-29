import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  authorSchema,
  basketSchema,
  bookSchema,
  categorySchema,
  priceSchema,
  publisherSchema
} from './books';

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

export const addAuthorSchema = z.object({
  addAuthor: authorSchema
});

export type AddAuthorMutation = z.infer<typeof addAuthorSchema>;

export const addCategorySchema = z.object({
  addCategory: categorySchema
});

export type AddCategoryMutation = z.infer<typeof addCategorySchema>;

export const addPublisherSchema = z.object({
  addPublisher: publisherSchema
});

export type AddPublisherMutation = z.infer<typeof addPublisherSchema>;

export const addBookFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(255, { message: 'Title is too long' }),
  price: priceSchema,
  quantity: z
    .number()
    .int()
    .min(1, { message: 'Quantity must be greater than 0' }),
  authorIds: z
    .array(
      z.string().refine((value) => !isNaN(parseInt(value)), {
        message: 'Author ID must be a number'
      })
    )
    .nonempty(),
  categoryIds: z
    .array(
      z.string().refine((value) => !isNaN(parseInt(value)), {
        message: 'Category ID must be a number'
      })
    )
    .nonempty(),
  publisherId: z.string().refine((value) => !isNaN(parseInt(value)), {
    message: 'Publisher ID must be a number'
  }),
  description: z
    .string()
    .max(1000, { message: 'Description is too long' })
    .optional(),
  ISBN: z.string().max(13, { message: 'ISBN is too long' }),
  publicationDate: z.string().date(),
  // image: z.string().base64().optional()
  image: z.instanceof(File).optional()
});

export const addBookFormResolver = zodResolver(addBookFormSchema);

export type AddBookFormData = z.infer<typeof addBookFormSchema>;

export const addBookMutationSchema = z.object({
  addBook: bookSchema
});

export type AddBookMutation = z.infer<typeof addBookMutationSchema>;
