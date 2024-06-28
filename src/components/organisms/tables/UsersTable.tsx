import { useQuery } from '@tanstack/react-query';

import { user } from '@/lib/tanstack-query/queryKeys';

import { getAllUsers } from '@/api/auth';

import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { UsersTableRow } from './UserTableRow';

export const UsersTable = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: user.all,
    queryFn: getAllUsers
  });

  return (
    <div>
      {isLoading && <LoadingSpinner message="Loading users..." />}
      {isError && <p>Something went wrong</p>}
      {data && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Is admin</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.allUsers.map((user) => (
              <UsersTableRow key={user.id} data={user} />
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
