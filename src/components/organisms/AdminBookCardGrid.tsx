import { useMemo, useState } from 'react';

import { BookWithRelations } from '@/schemas/books';

import { useAuthContext } from '@/hooks/useAuthContext';

import { BookCard } from '@/components/organisms/cards/BookCard';

import { Pagination } from '../molecules/Pagination';
import { AdminBookCard } from './cards/AdminBookCard';

interface CardListProps {
  data: BookWithRelations[];
}

export const AdminBookCardGrid = ({ data }: CardListProps) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const { currentUser } = useAuthContext();

  // const paginationProps = useMemo(() => {
  //   return {
  //     currentPage,
  //     totalPages: data.length / 9,
  //     onPageChange: setCurrentPage,
  //     containerClassName: 'self-end'
  //   };
  // }, [currentPage, data]);

  return (
    <div className="flex flex-col space-y-2">
      {/* <Pagination {...paginationProps} /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m gap-3">
        {data.map((book) => (
          <AdminBookCard key={book.id} data={book} />
        ))}
      </div>
      {/* <Pagination {...paginationProps} /> */}
    </div>
  );
};
