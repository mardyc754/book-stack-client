import { ZodSchema } from 'zod';

import { addBookToCartMutation } from '@/graphql/mutations';
import { allBooks, bookById } from '@/graphql/queries';

import {
  AddBookToCartMutation,
  AllBooksQuery,
  BookByIdQuery,
  addBookToCartSchema,
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

export const addBookToCart = async (
  bookId: string,
  userId: string,
  quantity = 1
) => {
  return await executeRequest(
    addBookToCartMutation,
    addBookToCartSchema as unknown as ZodSchema<AddBookToCartMutation>,
    {
      bookId,
      userId,
      quantity
    }
  );
};
