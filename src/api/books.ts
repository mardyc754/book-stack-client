import { allBooks } from '@/graphql/queries';
import { AllBooksQuery, allBooksSchema } from '@/graphql/schemas/queries';
import { ZodSchema } from 'zod';

import { executeRequest } from './executeRequest';

export const getAllBooks = async () => {
  return await executeRequest(
    allBooks,
    allBooksSchema as unknown as ZodSchema<AllBooksQuery>
  );
};
