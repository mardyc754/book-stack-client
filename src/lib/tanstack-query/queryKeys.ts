import { Book } from '@/schemas/books';

export const book = {
  all: ['book'] as const,
  filter: (
    categoryIds: string[],
    authorIds: string[],
    publicationYearFrom: number,
    publicationYearTo: number
  ) =>
    [
      ...book.all,
      'filter',
      categoryIds,
      authorIds,
      publicationYearFrom,
      publicationYearTo
    ] as const,
  byId: (id: Book['id']) => [...book.all, id] as const,
  userBooks: (userId: string) => [...book.all, 'user', userId] as const,
  addToStock: (id: Book['id']) => [...book.all, 'add-to-stock', id] as const
};

export const user = {
  all: ['user'] as const,
  current: ['user', 'current'] as const,
  byId: (id: string) => [...user.all, id] as const,
  byUsername: (username: string) => [...user.all, username] as const
};

export const basket = {
  all: ['basket'] as const,
  byUserId: (userId: string) => [...basket.all, userId] as const
};

export const author = {
  all: ['author'] as const
};

export const category = {
  all: ['category'] as const
};

export const publisher = {
  all: ['publisher'] as const
};
