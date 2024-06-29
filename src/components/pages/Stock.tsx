import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { book } from '@/lib/tanstack-query/queryKeys';

import { getAllBooks } from '@/api/books';

import { useAuthContext } from '@/hooks/useAuthContext';

import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { AdminBookCardGrid } from '@/components/organisms/grids/AdminBookCardGrid';
import { PageWrapper } from '@/components/templates/PageWrapper';

import { Button } from '../atoms/Button';

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
            <>
              <Button>
                <Link to="/add-book">Add book</Link>
              </Button>
              <AdminBookCardGrid data={data?.allBooks ?? []} />
            </>
          )}
        </>
      )}
      {error && <div>Error: {error.message}</div>}
    </PageWrapper>
  );
};
