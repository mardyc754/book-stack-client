import { useMutation, useQueryClient } from '@tanstack/react-query';

import { book } from '@/lib/tanstack-query/queryKeys';

import { addBookToStock } from '@/api/books';

import { Book } from '@/schemas/books';

import { useToast } from '@/components/ui/use-toast';

type UseAddBookToStockOptions = {
  bookId: Book['id'];
  quantity: Book['quantity'];
};

export const useAddBookToStock = ({
  bookId,
  quantity
}: UseAddBookToStockOptions) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => addBookToStock(bookId, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: book.all });
      //   navigate('/your-books');
      toast({
        title: 'Book added to stock'
      });
    },
    onError: () => {
      toast({
        title: 'Error when adding book to stock'
      });
    }
  });
};
