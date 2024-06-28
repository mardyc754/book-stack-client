import { BookWithRelations } from '@/schemas/books';

import { useAuthContext } from '@/hooks/useAuthContext';

import { BookCard } from '@/components/organisms/cards/BookCard';

interface CardListProps {
  data: BookWithRelations[];
}

export const BookCardGrid = ({ data }: CardListProps) => {
  const { currentUser } = useAuthContext();

  return (
    <div className="flex flex-col space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m gap-3">
        {data.map((book) => (
          <BookCard key={book.id} data={book} showAddToBasket={!!currentUser} />
        ))}
      </div>
    </div>
  );
};
