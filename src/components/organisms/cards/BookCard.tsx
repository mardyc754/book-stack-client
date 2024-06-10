import { BookWithRelations } from '@/schemas/books';

import { PrimaryButton } from '@/components/atoms/Button';
import { PrimaryButtonWithLink } from '@/components/atoms/ButtonWithLink';
import { HighlightedTypography } from '@/components/atoms/Typography';

interface CardProps {
  data: BookWithRelations;
}

export const BookCard = ({ data }: CardProps) => {
  const { id, authors, categories, price, title, imageUrlM } = data;
  return (
    <div className="card card-normal bg-base-100 rounded-xl shadow-xl">
      <div className="p-4">
        <figure>
          <img src={imageUrlM} alt={title} />
        </figure>
      </div>
      <div className="card-body justify-between">
        <div className="flex flex-col">
          <h2 className="card-title">{title}</h2>
          <p>
            {authors
              .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
              .join(', ')}
          </p>
          <p>{categories.map(({ name }) => name).join(', ')}</p>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <HighlightedTypography>{`${price} $`}</HighlightedTypography>
          <div className="card-actions justify-end">
            <PrimaryButtonWithLink href={`/books/${id}`}>
              Details
            </PrimaryButtonWithLink>
            <PrimaryButton>Add to basket</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
