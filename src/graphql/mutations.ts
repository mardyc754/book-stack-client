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
          image {
            type
            filename
            content
          }
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
          image {
            type
            filename
            content
          }
          authors {
            firstName
            lastName
          }
          quantity
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
          image {
            type
            filename
            content
          }
          authors {
            firstName
            lastName
          }
          quantity
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
      image {
        type
        filename
        content
      }
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
      image {
        type
        filename
        content
      }
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

export const addBookMutation = gql`
  mutation addBook(
    $title: String!
    $price: Float!
    $publicationDate: String!
    $pageCount: Int!
    $ISBN: String!
    $description: String
    $quantity: Int!
    $publisherId: ID!
    $authorIds: [ID!]!
    $categoryIds: [ID!]!
  ) {
    addBook(
      title: $title
      price: $price
      publicationDate: $publicationDate
      pageCount: $pageCount
      ISBN: $ISBN
      description: $description
      quantity: $quantity
      publisherId: $publisherId
      authorIds: $authorIds
      categoryIds: $categoryIds
    ) {
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
      quantity
      image {
        type
        filename
        content
      }
    }
  }
`;

export const addAuthorMutation = gql`
  mutation addAuthor($firstName: String!, $lastName: String!) {
    addAuthor(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

export const addCategoryMutation = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
      id
      name
    }
  }
`;

export const addPublisherMutation = gql`
  mutation addPublisher($name: String!) {
    addPublisher(name: $name) {
      id
      name
    }
  }
`;
