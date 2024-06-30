import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { book } from '@/lib/tanstack-query/queryKeys';

import { getAllBooks } from '@/api/books';

import { useAuthContext } from '@/hooks/useAuthContext';

import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { AdminBookCardGrid } from '@/components/organisms/grids/AdminBookCardGrid';
import { PageWrapper } from '@/components/templates/PageWrapper';

import { PrimaryButton } from '../atoms/Button';

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
            <div className="flex flex-col space-y-8">
              <PrimaryButton className="self-end">
                <Link to="/add-book">+ Add book</Link>
              </PrimaryButton>
              <AdminBookCardGrid data={data?.allBooks ?? []} />
            </div>
          )}
        </>
      )}
      {error && <div>Error: {error.message}</div>}
    </PageWrapper>
  );
};
