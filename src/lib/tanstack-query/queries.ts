import { getCurrentUser } from '@/graphql/api/auth';
import { getBookDetails } from '@/graphql/api/books';
import type { BookWithDetails } from '@/graphql/schemas/common';

import { book, user } from './queryKeys';

export const bookDetailsQuery = (id: BookWithDetails['id']) => ({
  queryKey: book.byId(id),
  queryFn: async () => await getBookDetails(id)
});

export const currentUserQuery = () => ({
  queryKey: user.current,
  queryFn: async () => await getCurrentUser()
});
