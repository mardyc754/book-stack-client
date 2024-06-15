import { useQuery } from '@tanstack/react-query';

import { basket } from '@/lib/tanstack-query/queryKeys';

import { getUserBasket } from '@/api/basket';

import { PrimaryButton } from '@/components/atoms/Button';
import { BookBasketCard } from '@/components/organisms/cards/BookBasketCard';

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
      <div className="flex justify-end p-4 space-y-6">
        <PrimaryButton>Buy</PrimaryButton>
      </div>
    </>
  );
};
