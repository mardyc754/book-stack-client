import { useBookData } from '@/hooks/useBookData';

import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { FilterBar } from '@/components/organisms/forms/FilterBar';
import { BookCardGrid } from '@/components/organisms/grids/BookCardGrid';
import { PageWrapper } from '@/components/templates/PageWrapper';

export const Home = () => {
  const {
    setSelectedAuthorIds,
    setSelectedCategoryIds,
    setPublicationYearFrom,
    setPublicationYearTo,
    authors,
    categories,
    allBooks,
    isLoading,
    error
  } = useBookData(1);

  return (
    <PageWrapper title="Home">
      <FilterBar
        authors={authors}
        categories={categories}
        onChangeAuthors={setSelectedAuthorIds}
        onChangeCategories={setSelectedCategoryIds}
        onChangePublicationYearFrom={setPublicationYearFrom}
        onChangePublicationYearTo={setPublicationYearTo}
      />
      {isLoading ? (
        <div className="p-8">
          <LoadingSpinner message="Loading data..." />
        </div>
      ) : (
        <BookCardGrid data={allBooks ?? []} />
      )}
      {error && <div>Error: {error.message}</div>}
    </PageWrapper>
  );
};
