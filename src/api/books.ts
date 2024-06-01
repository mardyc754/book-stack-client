import { ZodSchema } from 'zod';

import { allBooks, bookById } from '@/graphql/queries';

import {
  AllBooksQuery,
  BookByIdQuery,
  allBooksSchema,
  bookByIdSchema
} from '@/schemas/queries';

import { executeRequest } from './executeRequest';

export const getAllBooks = async () => {
  return await executeRequest(
    allBooks,
    allBooksSchema as unknown as ZodSchema<AllBooksQuery>
  );
};

export const getBookDetails = async (id: string) => {
  console.log('id', id);
  return await executeRequest(
    bookById,
    bookByIdSchema as unknown as ZodSchema<BookByIdQuery>,
    { id }
  );
};
