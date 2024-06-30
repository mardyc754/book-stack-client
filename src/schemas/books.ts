import { z } from 'zod';

export const priceSchema = z
  .string()
  .transform((val) => parseFloat(val))
  .refine(
    (val) => {
      return !isNaN(val);
    },
    { message: 'Price must be a valid number' }
  )
  .refine((val) => val > 0, { message: 'Price must be greater than 0' })
  .refine((val) => val < 10000, {
    message: 'Price must be less than 10000'
  });

export const authorSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string()
});

export const categorySchema = z.object({
  id: z.string(),
  name: z.string()
});

export const publisherSchema = z.object({
  id: z.string(),
  name: z.string()
});

export const imageSchema = z.object({
  filename: z.string(),
  type: z.string(),
  content: z.string().base64()
  // content: z.string()
});

export const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number().transform((value) => Number(value).toFixed(2)),
  image: imageSchema.nullable(),
  quantity: z.number().int()
});

export const bookWithRelationsSchema = bookSchema.extend({
  authors: z.array(authorSchema.omit({ id: true })),
  categories: z.array(categorySchema.omit({ id: true }))
});

export const bookWithDetailsSchema = bookWithRelationsSchema.extend({
  description: z.string().optional(),
  ISBN: z.string(),
  pageCount: z.number().int(),
  publicationDate: z
    .string()
    .transform((value) => new Date(value).toLocaleDateString()),
  publisher: publisherSchema.omit({ id: true })
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
        image: true,
        authors: true
      }),
      quantity: z.number().int()
    })
  )
});

export const boughtBookSchema = z.object({
  book: bookWithRelationsSchema.pick({
    id: true,
    title: true,
    price: true,
    authors: true,
    image: true
  }),
  quantity: z.number().int()
});

export type Author = z.infer<typeof authorSchema>;
export type Category = z.infer<typeof categorySchema>;
export type Publisher = z.infer<typeof publisherSchema>;
export type Book = z.infer<typeof bookSchema>;
export type Basket = z.infer<typeof basketSchema>;
export type BookWithRelations = z.infer<typeof bookWithRelationsSchema>;
export type BookWithDetails = z.infer<typeof bookWithDetailsSchema>;
export type BoughtBook = z.infer<typeof boughtBookSchema>;
export type BoughtBooks = BoughtBook[];
export type CoverImage = z.infer<typeof imageSchema>;

export const uploadBookCoverSuccessSchema = z.object({
  filename: z.string(),
  type: z.string(),
  content: z.string().base64(),
  bookId: z.number().int()
});

export type UploadBookCoverSuccess = z.infer<
  typeof uploadBookCoverSuccessSchema
>;

export const basicErrorSchema = z.object({
  message: z.string()
});
