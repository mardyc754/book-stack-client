import { z } from 'zod';

import { bookWithRelationsSchema } from './common';

export const allBooksSchema = z.object({
  allBooks: z.array(bookWithRelationsSchema)
});

export type AllBooksQuery = z.infer<typeof allBooksSchema>;
