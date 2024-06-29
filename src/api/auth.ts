import {
  changeUserPasswordMutation,
  changeUserRoleMutation,
  loginMutation,
  logoutMutation,
  registrationMutation
} from '@/graphql/mutations';
import { allUsers, currentUser as currentUserQuery } from '@/graphql/queries';

import {
  LoginData,
  RegistrationData,
  User,
  allUsersSchema,
  changeUserPasswordSchema,
  changeUserRoleSchema,
  currentUserSchema,
  loginResponseSchema,
  logoutResponseSchema,
  registationResponseSchema
} from '@/schemas/auth';

import { executeGraphQLRequest } from './executeGraphQLRequest';

export const login = async ({ username, password }: LoginData) => {
  return await executeGraphQLRequest(loginMutation, loginResponseSchema, {
    username,
    password
  });
};

export const getCurrentUser = async () => {
  return await executeGraphQLRequest(currentUserQuery, currentUserSchema);
};

export const signUp = async ({
  username,
  email,
  password
}: RegistrationData) => {
  return await executeGraphQLRequest(
    registrationMutation,
    registationResponseSchema,
    {
      username,
      email,
      password
    }
  );
};

export const logout = async () => {
  return await executeGraphQLRequest(logoutMutation, logoutResponseSchema);
};

export const getAllUsers = async () => {
  return await executeGraphQLRequest(allUsers, allUsersSchema);
};

export const changeUserPassword = async (
  userId: User['id'],
  newPassword: string
) => {
  return await executeGraphQLRequest(
    changeUserPasswordMutation,
    changeUserPasswordSchema,
    {
      userId,
      newPassword
    }
  );
};

export const changeUserRole = async (
  userId: User['id'],
  newRole: User['role']
) => {
  return await executeGraphQLRequest(
    changeUserRoleMutation,
    changeUserRoleSchema,
    {
      userId,
      newRole
    }
  );
};
