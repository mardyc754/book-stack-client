import { BookWithRelations } from '@/schemas/books';

import { PrimaryButton } from '@/components/atoms/Button';
import { PrimaryButtonWithLink } from '@/components/atoms/ButtonWithLink';
import { HighlightedTypography } from '@/components/atoms/Typography';

import { BookBasketCard } from './cards/BookBasketCard';

interface CardProps {
  data: BookWithRelations[];
}

export const BasketDropdownView = ({ data }: CardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl z-[1]">
      {data.map((book) => (
        <BookBasketCard key={`basketDropdownView-${book.id}`} data={book} />
      ))}
    </div>
  );
};
