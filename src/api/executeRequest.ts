import { GraphQLError } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import type { ZodSchema } from 'zod';

import { GraphQLErrorResponse } from '@/types/common';

const graphQLClient = new GraphQLClient(
  import.meta.env.VITE_GRAPHQL_ENDPOINT!,
  {
    credentials: 'include',
    mode: 'cors'
  }
);

export const executeRequest = async <T>(
  query: string,
  parser: ZodSchema<T>,
  variables?: Record<string, unknown>
) => {
  const response = await graphQLClient.request<T>(query, variables);

  if (response && response instanceof Object && 'errors' in response) {
    throw new GraphQLError(
      (response as GraphQLErrorResponse).errors
        .map((error) => error.message)
        .join('\n')
    );
  }

  const parsedResponse = parser.parse(response);

  return parsedResponse;
};
