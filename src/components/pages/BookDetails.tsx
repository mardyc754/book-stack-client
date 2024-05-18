import { BookWithDetails } from '@/graphql/schemas/common';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { bookDetailsQuery } from '@/lib/tanstack-query/queries';

import { LoadingSpinner } from '../atoms/LoadingSpinner';
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
      {book && <BookDetailsCard book={book?.bookById} />}
    </PageWrapper>
  );
};
