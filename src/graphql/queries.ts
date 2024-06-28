import { gql } from 'graphql-request';

export const allBooks = gql`
  query allBooks($minQuantity: Int) {
    allBooks(minQuantity: $minQuantity) {
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
      imageUrlS
      imageUrlM
      imageUrlL
      quantity
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
      imageUrlS
      imageUrlM
      imageUrlL
      quantity
    }
  }
`;

export const currentUser = gql`
  {
    currentUser {
      id
      username
      role
    }
  }
`;

export const basketByUserId = gql`
  query basketByUserId($userId: ID!) {
    basketByUserId(userId: $userId) {
      id
      user {
        id
      }
      books {
        book {
          id
          title
          price
          imageUrlM
          authors {
            firstName
            lastName
          }
        }
        quantity
      }
    }
  }
`;

export const boughtBooksByUserId = gql`
  query boughtBooksByUserId($userId: ID!) {
    boughtBooksByUserId(userId: $userId) {
      user {
        id
      }
      book {
        id
        title
        price
        imageUrlM
        authors {
          firstName
          lastName
        }
      }
      quantity
    }
  }
`;

export const allUsers = gql`
  {
    allUsers {
      id
      username
      role
    }
  }
`;
