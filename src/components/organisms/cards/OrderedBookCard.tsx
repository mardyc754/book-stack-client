import { Book, BookWithRelations } from '@/schemas/books';

import {
  BoldTypography,
  HighlightedTypography
} from '@/components/atoms/Typography';
import { CardBody } from '@/components/atoms/card/CardBody';
import { Card, CardTitle } from '@/components/ui/card';

import { getCoverImage } from '@/utils/imageUtils';

interface CardProps {
  bookData: Pick<
    BookWithRelations,
    'id' | 'price' | 'title' | 'image' | 'authors'
  >;
  quantity: Book['quantity'];
}

export const OrderedBookCard = ({ bookData, quantity }: CardProps) => {
  const { authors, price, title, image } = bookData;

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
          <BoldTypography>{`Ordered: ${quantity}`}</BoldTypography>
        </div>
      </CardBody>
    </Card>
  );
};
