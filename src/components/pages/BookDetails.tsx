import { BookWithDetails } from '@/graphql/schemas/common';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { bookDetailsQuery } from '@/lib/tanstack-query/queries';

import { LoadingSpinner } from '../atoms/LoadingSpinner';
import { SectionBase } from '../molecules/sections/Section';
import { BookDetailsCard } from '../organisms/cards/BookDetailsCard';
import { PageWrapper } from '../templates/PageWrapper';

export const BookDetails = () => {
  const { bookId } = useParams<{ bookId: string }>();
  console.log('bookId', bookId);

  const { data: book, isLoading } = useQuery(
    bookDetailsQuery(bookId as string)
  );

  return (
    <PageWrapper title="Book Details">
      {isLoading && <LoadingSpinner />}
      {book && (
        <div className="flex flex-col space-y-8">
          <BookDetailsCard book={book?.bookById} />
          <SectionBase title="Description">
            <p>{book?.bookById.description}</p>
          </SectionBase>
        </div>
      )}
    </PageWrapper>
  );
};
