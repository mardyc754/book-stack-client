import { ZodSchema } from 'zod';

import { basketByUserId } from '@/graphql/queries';

import { BasketByUserIdQuery, basketByUserIdSchema } from '@/schemas/queries';

import { executeRequest } from './executeRequest';

export const getUserBasket = async (userId: string) => {
  return await executeRequest(
    basketByUserId,
    basketByUserIdSchema as unknown as ZodSchema<BasketByUserIdQuery>,
    { userId }
  );
};
