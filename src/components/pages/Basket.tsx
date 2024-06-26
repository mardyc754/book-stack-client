import { useAuthContext } from '@/hooks/useAuthContext';

import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { BasketBooksList } from '@/components/organisms/BasketBooksList';
import { PageWrapper } from '@/components/templates/PageWrapper';

export const Basket = () => {
  const { currentUser, isLoading } = useAuthContext();

  return (
    <PageWrapper title="Basket">
      {isLoading ? (
        <LoadingSpinner message="Loading data..." />
      ) : (
        <>{currentUser?.id && <BasketBooksList userId={currentUser.id} />}</>
      )}
    </PageWrapper>
  );
};
