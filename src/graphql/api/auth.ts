import { login as loginMutation } from '../mutations';
import { currentUser as currentUserQuery } from '../queries';
import { LoginData, loginResponseSchema } from '../schemas/forms/loginForm';
import { currentUserSchema } from '../schemas/queries';
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
