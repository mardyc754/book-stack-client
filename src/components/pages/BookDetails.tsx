import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { bookDetailsQuery } from '@/lib/tanstack-query/queries';

import { useAuthContext } from '@/hooks/useAuthContext';

import { LoadingSpinner } from '../atoms/LoadingSpinner';
import { SectionBase } from '../molecules/sections/Section';
import { BookDetailsCard } from '../organisms/cards/BookDetailsCard';
import { PageWrapper } from '../templates/PageWrapper';

export const BookDetails = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { isAuthenticated } = useAuthContext();
  const { data: book, isLoading } = useQuery(
    bookDetailsQuery(bookId as string)
  );

  return (
    <PageWrapper title="Book Details">
      {isLoading && <LoadingSpinner />}
      {book && (
        <div className="flex flex-col space-y-8">
          <BookDetailsCard
            data={book?.bookById}
            addToBasketDisabled={!isAuthenticated}
          />
          <SectionBase title="Description">
            <p>{book?.bookById.description}</p>
          </SectionBase>
        </div>
      )}
    </PageWrapper>
  );
};
