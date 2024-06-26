import { ZodSchema } from 'zod';

import {
  addBookToStockMutation,
  buyBooksMutation,
  changeBookPriceMutation
} from '@/graphql/mutations';
import { allBooks, bookById, boughtBooksByUserId } from '@/graphql/queries';

import { Book } from '@/schemas/books';
import {
  AddBookToStockMutation,
  BuyBooksMutation,
  ChangeBookPriceMutation,
  addBookToStockSchema,
  buyBooksSchema,
  changeBookPriceSchema
} from '@/schemas/mutations';
import {
  AllBooksQuery,
  BookByIdQuery,
  BoughtBooksByUserIdQuery,
  allBooksSchema,
  bookByIdSchema,
  boughtBooksByUserIdSchema
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

export const buyBooks = async (userId: string) => {
  return await executeRequest(
    buyBooksMutation,
    buyBooksSchema as unknown as ZodSchema<BuyBooksMutation>,
    { userId }
  );
};

export const getBoughtBooks = async (userId: string) => {
  return await executeRequest(
    boughtBooksByUserId,
    boughtBooksByUserIdSchema as unknown as ZodSchema<BoughtBooksByUserIdQuery>,
    { userId }
  );
};

export const addBookToStock = async (
  bookId: Book['id'],
  quantity: Book['quantity']
) => {
  return await executeRequest(
    addBookToStockMutation,
    addBookToStockSchema as unknown as ZodSchema<AddBookToStockMutation>,
    { bookId, quantity }
  );
};

export const changeBookPrice = async (
  bookId: Book['id'],
  newPrice: Book['price']
) => {
  return await executeRequest(
    changeBookPriceMutation,
    changeBookPriceSchema as unknown as ZodSchema<ChangeBookPriceMutation>,
    { bookId, newPrice }
  );
};
