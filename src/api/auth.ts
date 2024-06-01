import {
  loginMutation,
  logoutMutation,
  registrationMutation
} from '@/graphql/mutations';
import { currentUser as currentUserQuery } from '@/graphql/queries';

import {
  LoginData,
  RegistrationData,
  loginResponseSchema,
  logoutResponseSchema,
  registationResponseSchema
} from '@/schemas/auth';
import { currentUserSchema } from '@/schemas/queries';

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
