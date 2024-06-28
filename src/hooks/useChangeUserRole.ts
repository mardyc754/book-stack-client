import { useMutation, useQueryClient } from '@tanstack/react-query';

import { user } from '@/lib/tanstack-query/queryKeys';

import { changeUserRole } from '@/api/auth';

import { User } from '@/schemas/auth';

import { useToast } from '@/components/ui/use-toast';

type UseChangeUserRoleOptions = {
  userId: User['id'];
  newRole: User['role'];
};

export const useChangeUserRole = ({
  userId,
  newRole
}: UseChangeUserRoleOptions) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => changeUserRole(userId, newRole),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: user.all });
      toast({
        title: 'Changed user role  to ' + newRole
      });
    },
    onError: () => {
      toast({
        title: 'Error when changing user role'
      });
    }
  });
};
