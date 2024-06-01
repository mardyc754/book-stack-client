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
      price
    }
  }
`;

export const bookById = gql`
  query getBookById($id: ID!) {
    bookById(id: $id) {
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
      pageCount
      publicationDate
      price
      publisher {
        name
      }
    }
  }
`;

export const currentUser = gql`
  {
    currentUser {
      id
      username
    }
  }
`;
