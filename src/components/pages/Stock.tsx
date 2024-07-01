import { Link } from 'react-router-dom';

import { useAuthContext } from '@/hooks/useAuthContext';
import { useBookData } from '@/hooks/useBookData';

import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { AdminBookCardGrid } from '@/components/organisms/grids/AdminBookCardGrid';
import { PageWrapper } from '@/components/templates/PageWrapper';

import { PrimaryButton } from '../atoms/Button';
import { FilterBar } from '../organisms/forms/FilterBar';

export const Stock = () => {
  const { currentUser } = useAuthContext();

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
  } = useBookData();

  return (
    <PageWrapper title="Stock">
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
        <>
          {currentUser?.role && (
            <div className="flex flex-col space-y-8">
              <PrimaryButton className="self-end">
                <Link to="/add-book">+ Add book</Link>
              </PrimaryButton>
              <AdminBookCardGrid data={allBooks ?? []} />
            </div>
          )}
        </>
      )}
      {error && <div>Error: {error.message}</div>}
    </PageWrapper>
  );
};
