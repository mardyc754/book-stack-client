import { Book } from '@/graphql/schemas/common';

export const book = {
  all: ['book'] as const,
  byId: (id: Book['id']) => [...book.all, id] as const
};

export const user = {
  all: ['user'] as const,
  byId: (id: string) => [...user.all, id] as const,
  byUsername: (username: string) => [...user.all, username] as const
};
