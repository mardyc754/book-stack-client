import { GraphQLError } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { ZodError, type ZodSchema } from 'zod';

import { GraphQLErrorResponse } from '@/types/common';

const graphQLClient = new GraphQLClient(
  import.meta.env.VITE_GRAPHQL_ENDPOINT!,
  {
    credentials: 'include',
    mode: 'cors'
  }
);

export const executeGraphQLRequest = async <T>(
  query: string,
  parser: ZodSchema<T>,
  variables?: Record<string, unknown> | FormData,
  requestHeaders?: Record<string, string>
) => {
  const response = await graphQLClient.request<T>(
    query,
    variables,
    requestHeaders
  );

  if (response && response instanceof Object && 'errors' in response) {
    throw new GraphQLError(
      (response as GraphQLErrorResponse).errors
        .map((error) => error.message)
        .join('\n')
    );
  }

  try {
    parser.parse(response);
  } catch (error) {
    if (error instanceof ZodError) {
      console.error(error.errors.map((err) => err.message).join('\n'));
    }
  }

  const parsedResponse = parser.parse(response);

  return parsedResponse;
};
