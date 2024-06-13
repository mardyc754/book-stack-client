import { BookWithRelations } from '@/schemas/books';

import { PrimaryButton } from '@/components/atoms/Button';
import { PrimaryButtonWithLink } from '@/components/atoms/ButtonWithLink';
import { HighlightedTypography } from '@/components/atoms/Typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

interface CardProps {
  data: BookWithRelations;
  showAddToBasket?: boolean;
}

export const BookCard = ({ data, showAddToBasket }: CardProps) => {
  const { id, authors, categories, price, title, imageUrlM } = data;
  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 flex items-center justify-center">
        <figure>
          <img src={imageUrlM} alt={title} />
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
        <HighlightedTypography>{`${price} $`}</HighlightedTypography>
        <div className="flex space-x-2  items-end space-y-2">
          <PrimaryButtonWithLink href={`/books/${id}`}>
            Details
          </PrimaryButtonWithLink>
          {showAddToBasket && <PrimaryButton>Add to basket</PrimaryButton>}
        </div>
      </CardFooter>
    </Card>
  );
};
