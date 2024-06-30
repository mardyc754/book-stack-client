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

import { getCoverImage } from '@/utils/imageUtils';

interface CardProps {
  bookData: Pick<
    BookWithRelations,
    'id' | 'price' | 'title' | 'authors' | 'image'
  >;
  quantity: Book['quantity'];
}

export const BookBasketCard = ({ bookData, quantity }: CardProps) => {
  const { currentUser } = useAuthContext();
  const { authors, price, title, image } = bookData;
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
    <Card className="flex items-center">
      <div className="p-4">
        <figure className="h-32 w-52 flex justify-center items-center">
          <img src={getCoverImage(image)} alt={title} className="max-h-full" />
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
