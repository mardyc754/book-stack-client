import { useMutation, useQueryClient } from '@tanstack/react-query';

import { removeBookFromCart } from '@/api/basket';

import { User } from '@/schemas/auth';
import { Book } from '@/schemas/books';

import { useToast } from '@/components/ui/use-toast';

type BookDetailsCardProps = {
  bookId: Book['id'];
  userId: User['id'];
  invalidateOnSuccessQueryKey: readonly string[];
};

export const useRemoveBookFromCart = ({
  bookId,
  userId,
  invalidateOnSuccessQueryKey
}: BookDetailsCardProps) => {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => removeBookFromCart(bookId, userId),
    onSuccess: () => {
      toast({ title: 'Book removed from basket' });
      queryClient.invalidateQueries({ queryKey: invalidateOnSuccessQueryKey });
    },
    onError: () => {
      toast({
        title: 'Error when removing book from the basket'
      });
    }
  });
};
