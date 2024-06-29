import { ZodSchema } from 'zod';

import {
  addAuthorMutation,
  addBookMutation,
  addBookToStockMutation,
  addCategoryMutation,
  addPublisherMutation,
  buyBooksMutation,
  changeBookPriceMutation
} from '@/graphql/mutations';
import {
  allAuthorsQuery,
  allBooks,
  allCategoriesQuery,
  allPublishersQuery,
  bookById,
  boughtBooksByUserId
} from '@/graphql/queries';

import {
  Book,
  basicErrorSchema,
  uploadBookCoverSuccessSchema
} from '@/schemas/books';
import {
  AddBookFormData,
  AddBookMutation,
  AddBookToStockMutation,
  BuyBooksMutation,
  ChangeBookPriceMutation,
  addAuthorSchema,
  addBookMutationSchema,
  addBookToStockSchema,
  addCategorySchema,
  addPublisherSchema,
  buyBooksSchema,
  changeBookPriceSchema
} from '@/schemas/mutations';
import {
  AllBooksQuery,
  BookByIdQuery,
  BoughtBooksByUserIdQuery,
  allAuthorsSchema,
  allBooksSchema,
  allCategoriesSchema,
  allPublishersSchema,
  bookByIdSchema,
  boughtBooksByUserIdSchema
} from '@/schemas/queries';

import { executeGraphQLRequest } from './executeGraphQLRequest';
import { executeRestRequest } from './executeRestRequest';

export const getAllBooks = async (minQuantity?: number) => {
  return await executeGraphQLRequest(
    allBooks,
    allBooksSchema as unknown as ZodSchema<AllBooksQuery>,
    { minQuantity }
  );
};

export const getBookDetails = async (id: string) => {
  return await executeGraphQLRequest(
    bookById,
    bookByIdSchema as unknown as ZodSchema<BookByIdQuery>,
    { id }
  );
};

export const buyBooks = async (userId: string) => {
  return await executeGraphQLRequest(
    buyBooksMutation,
    buyBooksSchema as unknown as ZodSchema<BuyBooksMutation>,
    { userId }
  );
};

export const getBoughtBooks = async (userId: string) => {
  return await executeGraphQLRequest(
    boughtBooksByUserId,
    boughtBooksByUserIdSchema as unknown as ZodSchema<BoughtBooksByUserIdQuery>,
    { userId }
  );
};

export const addBookToStock = async (
  bookId: Book['id'],
  quantity: Book['quantity']
) => {
  return await executeGraphQLRequest(
    addBookToStockMutation,
    addBookToStockSchema as unknown as ZodSchema<AddBookToStockMutation>,
    { bookId, quantity }
  );
};

export const changeBookPrice = async (
  bookId: Book['id'],
  newPrice: Book['price']
) => {
  return await executeGraphQLRequest(
    changeBookPriceMutation,
    changeBookPriceSchema as unknown as ZodSchema<ChangeBookPriceMutation>,
    { bookId, newPrice }
  );
};

export const getAllAuthors = async () => {
  return await executeGraphQLRequest(allAuthorsQuery, allAuthorsSchema);
};

export const getAllCategories = async () => {
  return await executeGraphQLRequest(allCategoriesQuery, allCategoriesSchema);
};

export const getAllPublishers = async () => {
  return await executeGraphQLRequest(allPublishersQuery, allPublishersSchema);
};

export const addAuthor = async ({
  firstName,
  lastName
}: {
  firstName: string;
  lastName: string;
}) => {
  return await executeGraphQLRequest(addAuthorMutation, addAuthorSchema, {
    firstName,
    lastName
  });
};

export const addCategory = async ({ name }: { name: string }) => {
  return await executeGraphQLRequest(addCategoryMutation, addCategorySchema, {
    name
  });
};

export const addPublisher = async ({ name }: { name: string }) => {
  return await executeGraphQLRequest(addPublisherMutation, addPublisherSchema, {
    name
  });
};

export const addBook = async (bookData: AddBookFormData) => {
  // const formData = new FormData();
  // Object.entries(bookData).forEach(([key, value]) => {
  //   if (key === 'image' && !!value) {
  //     formData.append(key, value as File, (value as File).name);
  //   } else {
  //     formData.append(key, value as string);
  //   }
  // });
  return await executeGraphQLRequest(
    addBookMutation,
    addBookMutationSchema as unknown as ZodSchema<AddBookMutation>,
    // formData,
    // {
    //   'content-type': 'multipart/form-data'
    // },
    { ...bookData }
  );
};

export const uploadBookCoverImage = async (bookId: string, image: File) => {
  const formData = new FormData();
  formData.append('image', image, image.name);
  formData.append('bookId', bookId);
  return await executeRestRequest({
    path: '/images/upload',
    method: 'post',
    successSchema: uploadBookCoverSuccessSchema,
    errorSchema: basicErrorSchema,
    data: formData,
    headers: {
      'content-type': 'multipart/form-data'
    }
  });
};
