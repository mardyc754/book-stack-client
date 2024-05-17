import { useQuery } from '@tanstack/react-query';

import { getAllBooks } from '@/api/books';

import { Table } from '@/components/organisms/Table';
import { PageWrapper } from '@/components/templates/PageWrapper';

import { LoadingSpinner } from '../atoms/LoadingSpinner';

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
        <Table data={data?.allBooks ?? []} />
      )}
      {error && <div>Error: {error.message}</div>}
    </PageWrapper>
  );
};
