import { BookWithDetails } from '@/graphql/schemas/common';

import {
  Button,
  PrimaryButton,
  PrimaryStretchedButton
} from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
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

type BookDetailsCardProps = {
  book: BookWithDetails;
};

export const BookDetailsCard = ({ book }: BookDetailsCardProps) => {
  return (
    <div className="grid grid-cols-12">
      <Figure className="flex flex-1 px-16 col-span-5 col-start-2">
        <Image
          src={`https://picsum.photos/800/1200?random=${Math.random()}`}
          alt={book.title}
        />
      </Figure>
      <div className="flex flex-col flex-1 col-span-5">
        <Card.Title size="large">{book.title}</Card.Title>
        <Divider />
        <BasicTypography>
          {'Authors: '}
          <BoldFragment>
            {book.authors
              .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
              .join(', ')}
          </BoldFragment>
        </BasicTypography>
        <BasicTypography>
          {'Categories: '}
          <BoldFragment>
            {book.categories.map(({ name }) => name).join(', ')}
          </BoldFragment>
        </BasicTypography>
        <BasicTypography>
          {'Publication date: '}
          <BoldFragment>{book.publicationDate}</BoldFragment>
        </BasicTypography>
        <BasicTypography>
          {'Publisher: '}
          <BoldFragment>{book.publisher.name}</BoldFragment>
        </BasicTypography>
        <Card.Actions>
          <BoldLargeTypography>
            {`Price: `}
            <HighlightedTextFragment>
              {`${book.price} $`}
            </HighlightedTextFragment>
          </BoldLargeTypography>
          <PrimaryStretchedButton>Add to basket</PrimaryStretchedButton>
        </Card.Actions>
      </div>
    </div>
  );
};
