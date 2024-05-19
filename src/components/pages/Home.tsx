import { getAllBooks } from '@/graphql/api/books';
import { useQuery } from '@tanstack/react-query';

import { Table } from '@/components/organisms/Table';
import { PageWrapper } from '@/components/templates/PageWrapper';

import { LoadingSpinner } from '../atoms/LoadingSpinner';
import { BookCardGrid } from '../organisms/BookCardGrid';

export const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: getAllBooks
  });

  return (
    <PageWrapper title="Home">
      {isLoading ? (
        <div className="p-8">
          <LoadingSpinner message="Loading data..." />
        </div>
      ) : (
        <BookCardGrid data={data?.allBooks ?? []} />
      )}
      {error && <div>Error: {error.message}</div>}
    </PageWrapper>
  );
};
