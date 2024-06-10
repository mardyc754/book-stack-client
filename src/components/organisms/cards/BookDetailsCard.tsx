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

type BookDetailsCardProps = {
  book: BookWithDetails;
};

export const BookDetailsCard = ({ book }: BookDetailsCardProps) => {
  const {
    title,
    authors,
    imageUrlL,
    categories,
    publicationDate,
    price,
    publisher
  } = book;
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
          <BoldLargeTypography>
            {`Price: `}
            <HighlightedTextFragment>{`${price} $`}</HighlightedTextFragment>
          </BoldLargeTypography>
          <PrimaryStretchedButton>Add to basket</PrimaryStretchedButton>
        </div>
      </div>
    </div>
  );
};
