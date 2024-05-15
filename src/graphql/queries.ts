import { gql } from 'graphql-request';

export const allBooks = gql`
  {
    allBooks {
      id
      authors {
        firstName
        lastName
      }
      categories {
        name
      }
      ISBN
      title
      description
      price
      publisher {
        name
      }
    }
  }
`;
