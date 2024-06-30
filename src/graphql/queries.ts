import { gql } from 'graphql-request';

export const allBooks = gql`
  query allBooks(
    $minQuantity: Int
    $authorIds: [ID]
    $categoryIds: [ID]
    $publicationDateFrom: String
    $publicationDateTo: String
  ) {
    allBooks(
      minQuantity: $minQuantity
      authorIds: $authorIds
      categoryIds: $categoryIds
      publicationDateFrom: $publicationDateFrom
      publicationDateTo: $publicationDateTo
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
      image {
        filename
        content
        type
      }
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
      image {
        filename
        content
        type
      }
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
          image {
            filename
            content
            type
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
        image {
          filename
          content
          type
        }
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

export const allAuthorsQuery = gql`
  {
    allAuthors {
      id
      firstName
      lastName
    }
  }
`;

export const allCategoriesQuery = gql`
  {
    allCategories {
      id
      name
    }
  }
`;

export const allPublishersQuery = gql`
  {
    allPublishers {
      id
      name
    }
  }
`;
