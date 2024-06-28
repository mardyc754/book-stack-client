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

export const changeBookQuantityInCartMutation = gql`
  mutation changeBookQuantityInCart(
    $bookId: ID!
    $userId: ID!
    $quantity: Int = 1
  ) {
    changeBookQuantityInCart(
      bookId: $bookId
      userId: $userId
      quantity: $quantity
    ) {
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

export const removeBookFromCartMutation = gql`
  mutation removeBookFromCart($bookId: ID!, $userId: ID!) {
    removeBookFromCart(bookId: $bookId, userId: $userId) {
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

export const buyBooksMutation = gql`
  mutation buyBooks($userId: ID!) {
    buyBooks(userId: $userId) {
      id
      user {
        id
      }
    }
  }
`;

export const addBookToStockMutation = gql`
  mutation addBookToStock($bookId: ID!, $quantity: Int!) {
    addBookToStock(bookId: $bookId, quantity: $quantity) {
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

export const changeBookPriceMutation = gql`
  mutation changeBookPrice($bookId: ID!, $newPrice: Float!) {
    changeBookPrice(bookId: $bookId, newPrice: $newPrice) {
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

export const changeUserPasswordMutation = gql`
  mutation changeUserPassword($userId: ID!, $newPassword: String!) {
    changeUserPassword(userId: $userId, newPassword: $newPassword) {
      id
      username
      role
    }
  }
`;

export const changeUserRoleMutation = gql`
  mutation changeUserRole($userId: ID!, $newRole: String!) {
    changeUserRole(userId: $userId, newRole: $newRole) {
      id
      username
      role
    }
  }
`;
