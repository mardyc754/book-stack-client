import { useQuery } from '@tanstack/react-query';

import { book } from '@/lib/tanstack-query/queryKeys';

import { getBoughtBooks } from '@/api/books';

import {
  BoldLargeTypography,
  HighlightedTypography
} from '@/components/atoms/Typography';
import { OrderedBookCard } from '@/components/organisms/cards/OrderedBookCard';

type OrderedBooksListProps = {
  userId: string;
};

export const OrderedBooksList = ({ userId }: OrderedBooksListProps) => {
  const { data } = useQuery({
    queryKey: book.userBooks(userId),
    queryFn: () => getBoughtBooks(userId)
  });

  return (
    <>
      <div className="flex flex-col space-y-4">
        {data?.boughtBooksByUserId.map(({ book, quantity }) => (
          <OrderedBookCard key={book.id} bookData={book} quantity={quantity} />
        ))}
      </div>
      <div className="flex items-baseline justify-end p-4 space-x-8 space-y-6">
        <div className="flex items-center space-x-2">
          <BoldLargeTypography>Total:</BoldLargeTypography>
          <HighlightedTypography>
            {`${(
              data?.boughtBooksByUserId.reduce((acc, { book, quantity }) => {
                return acc + quantity * Number(book.price);
              }, 0) ?? 0
            ).toFixed(2)} $`}
          </HighlightedTypography>
        </div>
      </div>
    </>
  );
};
