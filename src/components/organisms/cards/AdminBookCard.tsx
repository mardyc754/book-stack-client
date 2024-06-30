import { BookWithRelations } from '@/schemas/books';

import {
  BoldTypography,
  HighlightedTypography
} from '@/components/atoms/Typography';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

import { getCoverImage } from '@/utils/imageUtils';

import { AddBookToStockDialog } from '../dialogs/AddBookToStockDialog';
import { ChangePriceDialog } from '../dialogs/ChangePriceDialog';

interface CardProps {
  data: BookWithRelations;
}

export const AdminBookCard = ({ data }: CardProps) => {
  const { authors, categories, price, title, image, quantity } = data;

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
          <AddBookToStockDialog data={data} />
          <ChangePriceDialog data={data} />
        </div>
      </CardFooter>
    </Card>
  );
};
