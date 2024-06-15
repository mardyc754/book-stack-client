import { Book } from '@/schemas/books';

export const book = {
  all: ['book'] as const,
  byId: (id: Book['id']) => [...book.all, id] as const
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
