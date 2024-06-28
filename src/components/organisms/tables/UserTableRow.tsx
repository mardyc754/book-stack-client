import { User } from '@/schemas/auth';

import { useChangeUserRole } from '@/hooks/useChangeUserRole';

import { Checkbox } from '@/components/ui/checkbox';
import { TableCell, TableRow } from '@/components/ui/table';

import { ChangePasswordDialog } from '../dialogs/ChangePasswordDialog';

interface UserTableRowProps {
  data: User;
}
export const UsersTableRow = ({ data }: UserTableRowProps) => {
  const { mutate: changeRole } = useChangeUserRole({
    userId: data.id,
    newRole: data.role === 'ADMIN' ? 'USER' : 'ADMIN'
  });

  return (
    <TableRow key={data.id}>
      <TableCell className="font-medium text-center">{data.id}</TableCell>
      <TableCell>{data.username}</TableCell>
      <TableCell>
        <Checkbox
          checked={data.role === 'ADMIN'}
          onClick={() => {
            changeRole();
          }}
        />
      </TableCell>
      <TableCell>
        <ChangePasswordDialog userId={data.id} />
      </TableCell>
    </TableRow>
  );
};
