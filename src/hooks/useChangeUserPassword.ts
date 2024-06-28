import { useMutation, useQueryClient } from '@tanstack/react-query';

import { user } from '@/lib/tanstack-query/queryKeys';

import { changeUserPassword } from '@/api/auth';

import { User } from '@/schemas/auth';

import { useToast } from '@/components/ui/use-toast';

type UseChangeUserPasswordOptions = {
  userId: User['id'];
  newPassword: string;
};

export const useChangeUserPassword = ({
  userId,
  newPassword
}: UseChangeUserPasswordOptions) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => changeUserPassword(userId, newPassword),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: user.all });
      toast({
        title: 'Changed user password'
      });
    },
    onError: () => {
      toast({
        title: 'Error when changing user password'
      });
    }
  });
};
