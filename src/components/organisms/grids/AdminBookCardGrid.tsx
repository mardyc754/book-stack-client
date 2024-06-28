import { BookWithRelations } from '@/schemas/books';

import { AdminBookCard } from '@/components/organisms/cards/AdminBookCard';

interface CardListProps {
  data: BookWithRelations[];
}

export const AdminBookCardGrid = ({ data }: CardListProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m gap-3">
        {data.map((book) => (
          <AdminBookCard key={book.id} data={book} />
        ))}
      </div>
    </div>
  );
};
