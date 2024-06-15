import { ZodSchema } from 'zod';

import { allBooks, bookById } from '@/graphql/queries';

import {
  AllBooksQuery,
  BookByIdQuery,
  allBooksSchema,
  bookByIdSchema
} from '@/schemas/queries';

import { executeRequest } from './executeRequest';

export const getAllBooks = async (minQuantity?: number) => {
  return await executeRequest(
    allBooks,
    allBooksSchema as unknown as ZodSchema<AllBooksQuery>,
    { minQuantity }
  );
};

export const getBookDetails = async (id: string) => {
  return await executeRequest(
    bookById,
    bookByIdSchema as unknown as ZodSchema<BookByIdQuery>,
    { id }
  );
};
