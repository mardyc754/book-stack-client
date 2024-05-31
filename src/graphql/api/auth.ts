import { login as loginMutation } from '../mutations';
import { LoginData, loginResponseSchema } from '../schemas/forms/loginForm';
import { executeRequest } from './executeRequest';

export const login = async ({ username, password }: LoginData) => {
  return await executeRequest(loginMutation, loginResponseSchema, {
    username,
    password
  });
};
