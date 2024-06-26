import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addBookToCart } from '@/api/basket';

import { User } from '@/schemas/auth';
import { Book } from '@/schemas/books';

import { useToast } from '@/components/ui/use-toast';

type BookDetailsCardProps = {
  bookId: Book['id'];
  userId: User['id'];
  invalidateOnSuccessQueryKey: readonly string[];
};

export const useAddBookToBasket = ({
  bookId,
  userId,
  invalidateOnSuccessQueryKey
}: BookDetailsCardProps) => {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => addBookToCart(bookId, userId, 1),
    onSuccess: () => {
      toast({ title: 'Book added to basket' });
      queryClient.invalidateQueries({ queryKey: invalidateOnSuccessQueryKey });
    },
    onError: () => {
      toast({
        title: 'Error when adding book to the basket'
      });
    }
  });
};
