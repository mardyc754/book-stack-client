import { book } from '@/lib/tanstack-query/queryKeys';

import { BookWithRelations } from '@/schemas/books';

import { useAddBookToBasket } from '@/hooks/useAddBookToBasket';
import { useAuthContext } from '@/hooks/useAuthContext';

import { PrimaryButton } from '@/components/atoms/Button';
import { PrimaryButtonWithLink } from '@/components/atoms/ButtonWithLink';
import {
  BoldTypography,
  HighlightedTypography
} from '@/components/atoms/Typography';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

import { getCoverImage } from '@/utils/imageUtils';

interface CardProps {
  data: BookWithRelations;
  showAddToBasket?: boolean;
}

export const BookCard = ({ data, showAddToBasket }: CardProps) => {
  const { currentUser } = useAuthContext();
  const { mutate: addToBasket } = useAddBookToBasket({
    bookId: data.id,
    userId: currentUser?.id || '',
    invalidateOnSuccessQueryKey: book.all
  });
  const { id, authors, categories, price, title, image, quantity } = data;
  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 flex items-center justify-center">
        <figure className="h-40">
          <img src={getCoverImage(image)} alt={title} className="max-h-full" />
        </figure>
      </div>
      <CardContent className="flex-1">
        <div className="flex flex-col">
          <CardTitle>{title}</CardTitle>
          <p>
            {authors
              .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
              .join(', ')}
          </p>
          <p>{categories.map(({ name }) => name).join(', ')}</p>
        </div>
      </CardContent>
      <CardFooter className="justify-end flex-col items-end">
        <div className="flex justify-between items-center w-full">
          <BoldTypography>{`In stock: ${quantity}`}</BoldTypography>
          <HighlightedTypography>{`${price} $`}</HighlightedTypography>
        </div>
        <div className="flex space-x-2  items-end space-y-2">
          <PrimaryButtonWithLink href={`/books/${id}`}>
            Details
          </PrimaryButtonWithLink>
          {showAddToBasket && (
            <PrimaryButton onClick={() => addToBasket()}>
              Add to basket
            </PrimaryButton>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
