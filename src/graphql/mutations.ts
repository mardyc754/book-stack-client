import { gql } from 'graphql-request';

export const login = gql`
  mutation login($username: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const register = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
