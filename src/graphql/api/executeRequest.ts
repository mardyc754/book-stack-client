import { request } from 'graphql-request';
import type { ZodSchema } from 'zod';

import { GraphQLErrorResponse } from '@/types/common';

export const executeRequest = async <T>(
  query: string,
  parser: ZodSchema<T>,
  variables?: Record<string, unknown>
) => {
  const response = await request<T>(
    import.meta.env.VITE_GRAPHQL_ENDPOINT!,
    query,
    variables
  );

  if (response && response instanceof Object && 'errors' in response) {
    throw new Error(
      (response as GraphQLErrorResponse).errors
        .map((error) => error.message)
        .join('\n')
    );
  }

  const parsedResponse = parser.parse(response);

  return parsedResponse;
};
