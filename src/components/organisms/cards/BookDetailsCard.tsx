import { useMutation, useQueryClient } from '@tanstack/react-query';

import { book } from '@/lib/tanstack-query/queryKeys';

import { addBookToCart } from '@/api/books';

import { BookWithDetails } from '@/schemas/books';

import { PrimaryStretchedButton } from '@/components/atoms/Button';
import { Divider } from '@/components/atoms/Divider';
import { Figure } from '@/components/atoms/Figure';
import { Image } from '@/components/atoms/Image';
import {
  BoldFragment,
  HighlightedTextFragment
} from '@/components/atoms/TextFragment';
import {
  BasicTypography,
  BoldLargeTypography
} from '@/components/atoms/Typography';
import { CardTitle } from '@/components/atoms/card/CardTitle';
import { useToast } from '@/components/ui/use-toast';

type BookDetailsCardProps = {
  data: BookWithDetails;
  addToBasketDisabled?: boolean;
};

export const BookDetailsCard = ({
  data,
  addToBasketDisabled
}: BookDetailsCardProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => addBookToCart(data.id, 1),
    onSuccess: () => {
      toast({ title: 'Book added to basket', duration: 2000 });
      queryClient.invalidateQueries({ queryKey: book.byId(data.id) });
      // window.location.reload();\
    },
    onError: () => {
      toast({ title: 'Error when adding book to the basket' });
    }
  });

  const { toast } = useToast();
  const {
    title,
    authors,
    imageUrlL,
    categories,
    publicationDate,
    price,
    publisher,
    quantity
  } = data;
  return (
    <div className="grid grid-cols-12">
      <Figure className="flex flex-1 px-16 col-span-5 col-start-2">
        <Image src={imageUrlL} alt={title} />
      </Figure>
      <div className="flex flex-col flex-1 col-span-5">
        <CardTitle size="large">{title}</CardTitle>
        <Divider />
        <BasicTypography>
          {'Authors: '}
          <BoldFragment>
            {authors
              .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
              .join(', ')}
          </BoldFragment>
        </BasicTypography>
        <BasicTypography>
          {'Categories: '}
          <BoldFragment>
            {categories.map(({ name }) => name).join(', ')}
          </BoldFragment>
        </BasicTypography>
        <BasicTypography>
          {'Publication date: '}
          <BoldFragment>{publicationDate}</BoldFragment>
        </BasicTypography>
        <BasicTypography>
          {'Publisher: '}
          <BoldFragment>{publisher.name}</BoldFragment>
        </BasicTypography>
        <div className="flex flex-col justify-end items-end space-y-2 flex-1">
          <BoldLargeTypography>Quantity: {quantity}</BoldLargeTypography>
          <BoldLargeTypography>
            {`Price: `}
            <HighlightedTextFragment>{`${price} $`}</HighlightedTextFragment>
          </BoldLargeTypography>
          <PrimaryStretchedButton
            disabled={addToBasketDisabled}
            onClick={() => {
              mutate();
            }}
          >
            Add to basket
          </PrimaryStretchedButton>
        </div>
      </div>
    </div>
  );
};
