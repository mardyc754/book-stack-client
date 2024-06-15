import { useMutation, useQueryClient } from '@tanstack/react-query';

import { changeBookQuantityInCart } from '@/api/basket';

import { User } from '@/schemas/auth';
import { Book } from '@/schemas/books';

import { useToast } from '@/components/ui/use-toast';

type BookDetailsCardProps = {
  bookId: Book['id'];
  userId: User['id'];
  quantity: Book['quantity'];
  invalidateOnSuccessQueryKey: readonly string[];
};

export const useChangeBookQuantityInBasket = ({
  bookId,
  userId,
  quantity,
  invalidateOnSuccessQueryKey
}: BookDetailsCardProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => changeBookQuantityInCart(bookId, userId, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: invalidateOnSuccessQueryKey });
    },
    onError: () => {
      toast({
        title: 'Error when changing book quantity in the basket'
      });
    }
  });
};
