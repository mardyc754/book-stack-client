import { useAuthContext } from '@/hooks/useAuthContext';

import { PageWrapper } from '@/components/templates/PageWrapper';

import { LoadingSpinner } from '../atoms/LoadingSpinner';
import { OrderedBooksList } from '../organisms/OrderedBooksList';

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
