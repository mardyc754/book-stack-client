import { z } from 'zod';

export const authorSchema = z.object({
  firstName: z.string(),
  lastName: z.string()
});

export const categorySchema = z.object({
  name: z.string()
});

export const publisherSchema = z.object({
  name: z.string()
});

export const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number().transform((value) => Number(value).toFixed(2)),
  imageUrlS: z.string(),
  imageUrlM: z.string(),
  imageUrlL: z.string(),
  quantity: z.number().int()
});

export const bookWithRelationsSchema = bookSchema.extend({
  authors: z.array(authorSchema),
  categories: z.array(categorySchema)
});

export const bookWithDetailsSchema = bookWithRelationsSchema.extend({
  description: z.string().optional(),
  ISBN: z.string(),
  pageCount: z.number().int(),
  publicationDate: z
    .string()
    .transform((value) => new Date(value).toLocaleDateString()),
  publisher: publisherSchema
});

export const basketSchema = z.object({
  id: z.string(),
  user: z.object({
    id: z.string()
  }),
  books: z.array(
    z.object({
      book: bookWithRelationsSchema.pick({
        id: true,
        title: true,
        price: true,
        imageUrlM: true,
        authors: true
      }),
      quantity: z.number().int()
    })
  )
});

export type Author = z.infer<typeof authorSchema>;
export type Category = z.infer<typeof categorySchema>;
export type Publisher = z.infer<typeof publisherSchema>;
export type Book = z.infer<typeof bookSchema>;
export type Basket = z.infer<typeof basketSchema>;
export type BookWithRelations = z.infer<typeof bookWithRelationsSchema>;
export type BookWithDetails = z.infer<typeof bookWithDetailsSchema>;
