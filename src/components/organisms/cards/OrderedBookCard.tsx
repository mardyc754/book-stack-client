import { Book, BookWithRelations } from '@/schemas/books';

import {
  BoldTypography,
  HighlightedTypography
} from '@/components/atoms/Typography';
import { CardBody } from '@/components/atoms/card/CardBody';
import { Card, CardTitle } from '@/components/ui/card';

interface CardProps {
  bookData: Pick<
    BookWithRelations,
    'id' | 'price' | 'title' | 'imageUrlM' | 'authors'
  >;
  quantity: Book['quantity'];
}

export const OrderedBookCard = ({ bookData, quantity }: CardProps) => {
  const { authors, price, title, imageUrlM } = bookData;

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
          <BoldTypography>{`Ordered: ${quantity}`}</BoldTypography>
        </div>
      </CardBody>
    </Card>
  );
};
