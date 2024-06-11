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
}

export const BookCard = ({ data }: CardProps) => {
  const { id, authors, categories, price, title, imageUrlM } = data;
  return (
    // <div className="card card-normal bg-base-100 rounded-xl shadow-xl">
    //   <div className="p-4">
    //     <figure>
    //       <img src={imageUrlM} alt={title} />
    //     </figure>
    //   </div>
    //   <div className="card-body justify-between">
    //     <div className="flex flex-col">
    //       <h2 className="card-title">{title}</h2>
    //       <p>
    //         {authors
    //           .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
    //           .join(', ')}
    //       </p>
    //       <p>{categories.map(({ name }) => name).join(', ')}</p>
    //     </div>
    //     <div className="flex flex-col items-end space-y-2">
    //       <HighlightedTypography>{`${price} $`}</HighlightedTypography>
    //       <div className="card-actions justify-end">
    //         <PrimaryButtonWithLink href={`/books/${id}`}>
    //           Details
    //         </PrimaryButtonWithLink>
    //         <PrimaryButton>Add to basket</PrimaryButton>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Card className="h-full">
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
          <PrimaryButton>Add to basket</PrimaryButton>
        </div>
      </CardFooter>
    </Card>
  );
};
