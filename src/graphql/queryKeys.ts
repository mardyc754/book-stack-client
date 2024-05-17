import { Book } from '@/graphql/schemas/common';

export const book = {
  all: ['book'] as const,
  byId: (id: Book['id']) => [...book.all, id] as const
};
