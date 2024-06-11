import { BookWithRelations } from '@/schemas/books';

import { PrimaryButton } from '@/components/atoms/Button';
import { PrimaryButtonWithLink } from '@/components/atoms/ButtonWithLink';
import { HighlightedTypography } from '@/components/atoms/Typography';

interface CardProps {
  data: BookWithRelations;
}

export const BookBasketCard = ({ data }: CardProps) => {
  const { id, authors, categories, price, title, imageUrlS } = data;
  return (
    <div className="card card-side bg-base-100 border-b-2">
      <div className="p-4">
        <figure>
          <img src={imageUrlS} alt={title} />
        </figure>
      </div>
      <div className="card-body justify-between">
        <div className="flex flex-col  justify-center">
          <h2 className="card-title">{title}</h2>
          <p>
            {authors
              .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
              .join(', ')}
          </p>
          <p>{categories.map(({ name }) => name).join(', ')}</p>
          <HighlightedTypography fontSize="text-xl">{`${price} $`}</HighlightedTypography>
        </div>
      </div>
    </div>
  );
};
