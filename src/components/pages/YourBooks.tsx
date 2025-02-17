import { useAuthContext } from '@/hooks/useAuthContext';

import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { OrderedBooksList } from '@/components/organisms/lists/OrderedBooksList';
import { PageWrapper } from '@/components/templates/PageWrapper';

export const YourBooks = () => {
  const { currentUser, isLoading } = useAuthContext();

  return (
    <PageWrapper title="Your books">
      {isLoading ? (
        <LoadingSpinner message="Loading data..." />
      ) : (
        <>{currentUser?.id && <OrderedBooksList userId={currentUser.id} />}</>
      )}
    </PageWrapper>
  );
};
