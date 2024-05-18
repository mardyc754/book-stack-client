import { BookWithDetails, BookWithRelations } from '@/graphql/schemas/common';

type BookDetailsCardProps = {
  book: BookWithDetails;
};

export const BookDetailsCard = ({ book }: BookDetailsCardProps) => {
  return (
    <div className="card card-side bg-base-100 rounded-sm">
      <figure>
        <img
          src={`https://picsum.photos/200/300?random=${Math.random()}`}
          alt={book.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <div className="divider" />
        <p>
          {'Authors: '}
          {book.authors
            .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
            .join(', ')}
        </p>
        <p>
          {'Categories: '}
          {book.categories.map(({ name }) => name).join(', ')}
        </p>
        <p>
          {'Publisher: '}
          {book.publisher.name}
        </p>
        <p>{`${book.price} $`}</p>
      </div>
    </div>
  );
};
