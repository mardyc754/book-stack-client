import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { author, book, category } from '@/lib/tanstack-query/queryKeys';

import { getAllAuthors, getAllBooks, getAllCategories } from '@/api/books';

import { Author, Category } from '@/schemas/books';

import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { BookCardGrid } from '@/components/organisms/grids/BookCardGrid';
import { PageWrapper } from '@/components/templates/PageWrapper';

import { FilterBar } from '../organisms/forms/FilterBar';

export const Home = () => {
  const queryClient = useQueryClient();
  const [selectedAuthorIds, setSelectedAuthorIds] = useState<Author['id'][]>(
    []
  );
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<
    Category['id'][]
  >([]);

  const [publicationYearFrom, setPublicationYearFrom] = useState<
    number | undefined
  >(undefined);

  const [publicationYearTo, setPublicationYearTo] = useState<
    number | undefined
  >(undefined);

  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: book.all,
    queryFn: () =>
      getAllBooks(
        0,
        selectedAuthorIds.length > 0 ? selectedAuthorIds : undefined,
        selectedCategoryIds.length > 0 ? selectedCategoryIds : undefined,
        publicationYearFrom,
        publicationYearTo
      )
  });

  useEffect(() => {
    refetch();
  }, [
    selectedAuthorIds,
    selectedCategoryIds,
    publicationYearFrom,
    publicationYearTo,
    queryClient,
    refetch
  ]);

  const { data: authors } = useQuery({
    queryKey: author.all,
    queryFn: getAllAuthors
  });

  const { data: categories } = useQuery({
    queryKey: category.all,
    queryFn: getAllCategories
  });

  return (
    <PageWrapper title="Home">
      <FilterBar
        authors={authors?.allAuthors ?? []}
        categories={categories?.allCategories ?? []}
        onChangeAuthors={setSelectedAuthorIds}
        onChangeCategories={setSelectedCategoryIds}
        onChangePublicationYearFrom={setPublicationYearFrom}
        onChangePublicationYearTo={setPublicationYearTo}
      />
      {isLoading || isFetching ? (
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
