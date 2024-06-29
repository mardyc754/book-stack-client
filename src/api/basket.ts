import { ZodSchema } from 'zod';

import {
  addBookToCartMutation,
  changeBookQuantityInCartMutation,
  removeBookFromCartMutation
} from '@/graphql/mutations';
import { basketByUserId } from '@/graphql/queries';

import {
  AddBookToCartMutation,
  ChangeBookQuantityInCartMutation,
  RemoveBookFromCartMutation,
  addBookToCartSchema,
  changeBookQuantityInCartSchema,
  removeBookFromCartSchema
} from '@/schemas/mutations';
import { BasketByUserIdQuery, basketByUserIdSchema } from '@/schemas/queries';

import { executeGraphQLRequest } from './executeGraphQLRequest';

export const getUserBasket = async (userId: string) => {
  return await executeGraphQLRequest(
    basketByUserId,
    basketByUserIdSchema as unknown as ZodSchema<BasketByUserIdQuery>,
    { userId }
  );
};

export const addBookToCart = async (
  bookId: string,
  userId: string,
  quantity = 1
) => {
  return await executeGraphQLRequest(
    addBookToCartMutation,
    addBookToCartSchema as unknown as ZodSchema<AddBookToCartMutation>,
    {
      bookId,
      userId,
      quantity
    }
  );
};

export const changeBookQuantityInCart = async (
  bookId: string,
  userId: string,
  quantity = 1
) => {
  return await executeGraphQLRequest(
    changeBookQuantityInCartMutation,
    changeBookQuantityInCartSchema as unknown as ZodSchema<ChangeBookQuantityInCartMutation>,
    {
      bookId,
      userId,
      quantity
    }
  );
};

export const removeBookFromCart = async (bookId: string, userId: string) => {
  return await executeGraphQLRequest(
    removeBookFromCartMutation,
    removeBookFromCartSchema as unknown as ZodSchema<RemoveBookFromCartMutation>,
    {
      bookId,
      userId
    }
  );
};
