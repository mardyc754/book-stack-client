import { useQuery } from '@tanstack/react-query';

import { getAllBooks } from '@/api/books';

import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { BookCardGrid } from '@/components/organisms/grids/BookCardGrid';
import { PageWrapper } from '@/components/templates/PageWrapper';

export const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: () => getAllBooks(0)
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
