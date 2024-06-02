import { getCurrentUser } from '@/api/auth';
import { getBookDetails } from '@/api/books';

import type { BookWithDetails } from '@/schemas/books';

import { book, user } from './queryKeys';

export const bookDetailsQuery = (id: BookWithDetails['id']) => ({
  queryKey: book.byId(id),
  queryFn: async () => await getBookDetails(id)
});

export const currentUserQuery = () => ({
  queryKey: user.current,
  queryFn: async () => await getCurrentUser()
});
