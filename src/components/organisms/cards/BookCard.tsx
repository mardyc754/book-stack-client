import { BookWithRelations } from '@/graphql/schemas/common';

import { PrimaryButton } from '@/components/atoms/Button';
import { PrimaryButtonWithLink } from '@/components/atoms/ButtonWithLink';
import { HighlightedTypography } from '@/components/atoms/Typography';

interface CardProps {
  data: BookWithRelations;
}

export const BookCard = ({ data }: CardProps) => {
  const { id, authors, categories, price, title } = data;
  return (
    <div className="card card-side card-normal bg-base-100 rounded-sm border-b-2">
      <figure>
        <img
          src={`https://picsum.photos/200/300?random=${Math.random()}`}
          alt={title}
        />
      </figure>
      <div className="card-body flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="card-title">{title}</h2>
          <p>
            {authors
              .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
              .join(', ')}
          </p>
          <p>{categories.map(({ name }) => name).join(', ')}</p>
        </div>
        <div className="flex flex-col items-end">
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
