import { BookWithRelations } from '@/graphql/schemas/common';
import { useMemo, useState } from 'react';

import { BookCard } from '@/components/organisms/cards/BookCard';

import { Pagination } from '../molecules/Pagination';

interface CardListProps {
  data: BookWithRelations[];
}

export const BookCardList = ({ data }: CardListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationProps = useMemo(() => {
    return {
      currentPage,
      totalPages: data.length / 10,
      onPageChange: setCurrentPage,
      containerClassName: 'self-end'
    };
  }, [currentPage, data]);

  console.log('currentPage', currentPage);
  return (
    <div className="flex flex-col space-y-2">
      <Pagination {...paginationProps} />
      <div className="flex flex-col space-y-2">
        {data.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
      </div>
      <Pagination {...paginationProps} />
    </div>
  );
};
