import { useQuery } from '@tanstack/react-query';

import { basket } from '@/lib/tanstack-query/queryKeys';

import { getUserBasket } from '@/api/basket';

import { PrimaryButton } from '@/components/atoms/Button';
import { BookBasketCard } from '@/components/organisms/cards/BookBasketCard';

import {
  BoldLargeTypography,
  HighlightedTypography
} from '../atoms/Typography';

type BasketBooksListProps = {
  userId: string;
};

export const BasketBooksList = ({ userId }: BasketBooksListProps) => {
  const { data } = useQuery({
    queryKey: basket.byUserId(userId),
    queryFn: () => getUserBasket(userId)
  });

  return (
    <>
      <div className="flex flex-col space-y-4">
        {data?.basketByUserId.books.map(({ book, quantity }) => (
          <BookBasketCard key={book.id} bookData={book} quantity={quantity} />
        ))}
      </div>
      <div className="flex items-baseline justify-end p-4 space-x-8 space-y-6">
        <div className="flex items-center space-x-2">
          <BoldLargeTypography>Total:</BoldLargeTypography>
          <HighlightedTypography>
            {`${data?.basketByUserId.books
              .reduce((acc, { book, quantity }) => {
                return acc + quantity * Number(book.price);
              }, 0)
              .toFixed(2)} $`}
          </HighlightedTypography>
        </div>
        <PrimaryButton>Buy</PrimaryButton>
      </div>
    </>
  );
};
