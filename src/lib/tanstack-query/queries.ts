import { getBookDetails } from '@/graphql/api/books';
import type { BookWithDetails } from '@/graphql/schemas/common';

import { book } from './queryKeys';

export const bookDetailsQuery = (id: BookWithDetails['id']) => ({
  queryKey: book.byId(id),
  queryFn: async () => await getBookDetails(id)
});
