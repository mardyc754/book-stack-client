import { useState } from 'react';

import { basket } from '@/lib/tanstack-query/queryKeys';

import { Book, BookWithRelations } from '@/schemas/books';

import { useAuthContext } from '@/hooks/useAuthContext';
import { useChangeBookQuantityInBasket } from '@/hooks/useChangeBookQuantityInBasket';
import { useRemoveBookFromCart } from '@/hooks/useRemoveBookFromCart';

import { ErrorButton } from '@/components/atoms/Button';
import { HighlightedTypography } from '@/components/atoms/Typography';
import { CardBody } from '@/components/atoms/card/CardBody';
import { NumericInput } from '@/components/molecules/forms/NumericInput';
import { Card, CardTitle } from '@/components/ui/card';

interface CardProps {
  bookData: Pick<
    BookWithRelations,
    'id' | 'price' | 'title' | 'imageUrlM' | 'authors'
  >;
  quantity: Book['quantity'];
}

export const BookBasketCard = ({ bookData, quantity }: CardProps) => {
  const { currentUser } = useAuthContext();
  const { authors, price, title, imageUrlM } = bookData;
  const [newQuantity, setNewQuantity] = useState(quantity);

  const { mutate: mutateOnQuantityChange } = useChangeBookQuantityInBasket({
    bookId: bookData.id,
    userId: currentUser?.id || '',
    quantity: newQuantity,
    invalidateOnSuccessQueryKey: basket.all
  });

  const { mutate: mutateOnRemove } = useRemoveBookFromCart({
    bookId: bookData.id,
    userId: currentUser?.id || '',
    invalidateOnSuccessQueryKey: basket.all
  });

  return (
    <Card className="flex">
      <div className="p-4">
        <figure>
          <img src={imageUrlM} alt={title} />
        </figure>
      </div>
      <CardBody>
        <div className="flex flex-col justify-center">
          <CardTitle>{title}</CardTitle>
          <p>
            {authors
              .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
              .join(', ')}
          </p>
          <HighlightedTypography fontSize="text-xl">{`${price} $`}</HighlightedTypography>
        </div>
        <div className="flex self-end items-baseline space-x-4">
          <NumericInput
            label="In basket:"
            initialValue={quantity}
            min="1"
            onChange={(newValue) => {
              setNewQuantity(newValue);
              mutateOnQuantityChange();
            }}
          />
          <ErrorButton
            onClick={() => {
              mutateOnRemove();
            }}
          >
            Remove
          </ErrorButton>
        </div>
      </CardBody>
    </Card>
  );
};
