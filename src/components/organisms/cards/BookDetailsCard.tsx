import { book } from '@/lib/tanstack-query/queryKeys';

import { BookWithDetails } from '@/schemas/books';

import { useAddBookToBasket } from '@/hooks/useAddBookToBasket';
import { useAuthContext } from '@/hooks/useAuthContext';

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

import { getCoverImage } from '@/utils/imageUtils';

type BookDetailsCardProps = {
  data: BookWithDetails;
  addToBasketDisabled?: boolean;
};

export const BookDetailsCard = ({
  data,
  addToBasketDisabled
}: BookDetailsCardProps) => {
  const { currentUser } = useAuthContext();

  const { mutate } = useAddBookToBasket({
    bookId: data.id,
    userId: currentUser?.id || '',
    invalidateOnSuccessQueryKey: book.byId(data.id)
  });

  const {
    title,
    authors,
    image,
    categories,
    publicationDate,
    price,
    publisher,
    quantity
  } = data;
  return (
    <div className="grid grid-cols-12">
      <Figure className="flex flex-1 px-16 col-span-5 col-start-1 h-96">
        <Image src={getCoverImage(image)} alt={title} />
      </Figure>
      <div className="flex flex-col flex-1 col-span-6">
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
          <BoldLargeTypography>In stock: {quantity}</BoldLargeTypography>
          <BoldLargeTypography>
            {`Price: `}
            <HighlightedTextFragment>{`${price} $`}</HighlightedTextFragment>
          </BoldLargeTypography>
          <PrimaryStretchedButton
            disabled={addToBasketDisabled || quantity === 0}
            onClick={() => {
              mutate();
            }}
          >
            {addToBasketDisabled
              ? 'Login to add the book to cart'
              : 'Add to basket'}
          </PrimaryStretchedButton>
        </div>
      </div>
    </div>
  );
};
