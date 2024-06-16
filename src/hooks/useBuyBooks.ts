import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { basket } from '@/lib/tanstack-query/queryKeys';

import { buyBooks } from '@/api/books';

import { User } from '@/schemas/auth';

import { useToast } from '@/components/ui/use-toast';

type BookDetailsCardProps = {
  userId: User['id'];
};

export const useBuyBooks = ({ userId }: BookDetailsCardProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => buyBooks(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: basket.byUserId(userId) });
      //   navigate('/your-books');
      toast({
        title: 'Books bought successfully'
      });
      navigate('/your-books');
    },
    onError: () => {
      toast({
        title: 'Error when buying books'
      });
    }
  });
};
