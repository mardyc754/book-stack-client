import { useAuthContext } from '@/hooks/useAuthContext';

import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { UsersTable } from '@/components/organisms/tables/UsersTable';
import { PageWrapper } from '@/components/templates/PageWrapper';

export const Users = () => {
  const { currentUser, isLoading } = useAuthContext();

  return (
    <PageWrapper title="Users">
      {isLoading ? (
        <LoadingSpinner message="Loading data..." />
      ) : (
        <>{currentUser?.id && <UsersTable />}</>
      )}
    </PageWrapper>
  );
};
