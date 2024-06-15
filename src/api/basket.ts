import { ZodSchema } from 'zod';

import { addBookToCartMutation } from '@/graphql/mutations';
import { allBooks, bookById } from '@/graphql/queries';

import {
  AllBooksQuery,
  BookByIdQuery,
  addBookToCartSchema,
  allBooksSchema,
  bookByIdSchema
} from '@/schemas/queries';
