import { request } from 'graphql-request';
import { ZodSchema } from 'zod';

export const executeRequest = async <T>(
  query: string,
  parser: ZodSchema<T>
) => {
  const response = await request<T>(
    import.meta.env.VITE_GRAPHQL_ENDPOINT!,
    query
  );

  if (response && response instanceof Object && 'errors' in response) {
    throw new Error(response.errors);
  }

  const parsedResponse = parser.parse(response);

  return parsedResponse;
};
