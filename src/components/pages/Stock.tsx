import { useQuery } from '@tanstack/react-query';

import { book } from '@/lib/tanstack-query/queryKeys';

import { getAllBooks } from '@/api/books';

import { useAuthContext } from '@/hooks/useAuthContext';

import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { AdminBookCardGrid } from '@/components/organisms/grids/AdminBookCardGrid';
import { PageWrapper } from '@/components/templates/PageWrapper';

export const Stock = () => {
  const { currentUser } = useAuthContext();

  const { data, error, isLoading } = useQuery({
    queryKey: book.all,
    queryFn: () => getAllBooks(-1)
  });

  return (
    <PageWrapper title="Stock">
      {isLoading ? (
        <div className="p-8">
          <LoadingSpinner message="Loading data..." />
        </div>
      ) : (
        <>
          {currentUser?.role && (
            <AdminBookCardGrid data={data?.allBooks ?? []} />
          )}
        </>
      )}
      {error && <div>Error: {error.message}</div>}
    </PageWrapper>
  );
};
