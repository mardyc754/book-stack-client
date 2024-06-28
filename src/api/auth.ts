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

import { executeRequest } from './executeRequest';

export const login = async ({ username, password }: LoginData) => {
  return await executeRequest(loginMutation, loginResponseSchema, {
    username,
    password
  });
};

export const getCurrentUser = async () => {
  return await executeRequest(currentUserQuery, currentUserSchema);
};

export const signUp = async ({
  username,
  email,
  password
}: RegistrationData) => {
  return await executeRequest(registrationMutation, registationResponseSchema, {
    username,
    email,
    password
  });
};

export const logout = async () => {
  return await executeRequest(logoutMutation, logoutResponseSchema);
};

export const getAllUsers = async () => {
  return await executeRequest(allUsers, allUsersSchema);
};

export const changeUserPassword = async (
  userId: User['id'],
  newPassword: string
) => {
  return await executeRequest(
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
  return await executeRequest(changeUserRoleMutation, changeUserRoleSchema, {
    userId,
    newRole
  });
};
