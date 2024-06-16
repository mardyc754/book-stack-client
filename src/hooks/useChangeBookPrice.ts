import { useMutation, useQueryClient } from '@tanstack/react-query';

import { book } from '@/lib/tanstack-query/queryKeys';

import { changeBookPrice } from '@/api/books';

import { Book } from '@/schemas/books';

import { useToast } from '@/components/ui/use-toast';

type UseAddBookToStockOptions = {
  bookId: Book['id'];
  newPrice: Book['price'];
};

export const useChangeBookPrice = ({
  bookId,
  newPrice
}: UseAddBookToStockOptions) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => changeBookPrice(bookId, newPrice),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: book.all });
      toast({
        title: 'Changed book price'
      });
    },
    onError: () => {
      toast({
        title: 'Error when changing book price'
      });
    }
  });
};
