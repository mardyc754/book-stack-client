import { gql } from 'graphql-request';

export const loginMutation = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      role
    }
  }
`;

export const registrationMutation = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      id
      username
      role
    }
  }
`;

export const logoutMutation = gql`
  mutation {
    logout
  }
`;

export const addBookToCartMutation = gql`
  mutation addBookToCart($bookId: ID!, $userId: ID!, $quantity: Int = 1) {
    addBookToCart(bookId: $bookId, userId: $userId, quantity: $quantity) {
      id
      user {
        id
      }
      books {
        book {
          id
          title
          price
        }
        quantity
      }
    }
  }
`;
