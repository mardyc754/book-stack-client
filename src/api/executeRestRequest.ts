import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse
} from 'axios';
import { ZodError, type ZodType } from 'zod';

import { ResponseError } from './errors/ResponseError';

export const fetcher = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL!
});
type ResponseRecord =
  | (Partial<Record<string, unknown>> & {
      message?: string;
    })
  | string
  | number
  | boolean
  | null
  | undefined;

type ResponseData = ResponseRecord | ResponseRecord[];

export type ErrorResponseData = { message: string };

type FetchingData<
  SuccessData extends ResponseData,
  ErrorData extends ErrorResponseData,
  InputData = Record<string, unknown>
> =
  | {
      path: string;
      method: 'get' | 'delete';
      successSchema: ZodType<SuccessData>;
      errorSchema: ZodType<ErrorData>;
      data?: undefined;
      params?: Record<string, unknown>;
      headers?: Record<string, string>;
    }
  | {
      path: string;
      method: 'post' | 'put';
      successSchema: ZodType<SuccessData>;
      errorSchema: ZodType<ErrorData>;
      data?: InputData;
      params?: Record<string, unknown>;
      headers?: Record<string, string>;
    };

function handleTypeErrors(err: unknown) {
  if (err instanceof ZodError) {
    // eslint-disable-next-line no-console
    console.error(err.errors);
    return { message: 'Type error of received data' };
  } else {
    throw err;
  }
}

export async function executeRestRequest<
  SuccessData extends ResponseData,
  ErrorData extends ErrorResponseData,
  InputData = Record<string, unknown>
>({
  path,
  method,
  successSchema,
  errorSchema,
  data,
  params,
  headers
}: FetchingData<SuccessData, ErrorData, InputData>) {
  let responseData = { message: 'Connection error' } as SuccessData | ErrorData;
  return await fetcher<
    AxiosRequestConfig<InputData>,
    AxiosResponse<SuccessData>
  >({
    method,
    url: path,
    data,
    withCredentials: true,
    params,
    headers
  })
    .then((res) => {
      responseData = successSchema.parse(res.data);
      return responseData;
    })
    .catch((err) => {
      if (err instanceof AxiosError) {
        responseData = {
          ...errorSchema.parse(err.response?.data)
        } as ErrorData;
        throw new ResponseError(responseData.message!, responseData);
      }

      responseData = handleTypeErrors(err) as SuccessData | ErrorData;

      throw new ResponseError(
        (responseData as ErrorData).message,
        responseData
      );
    })
    .catch((err) => {
      responseData = handleTypeErrors(err) as SuccessData | ErrorData;
      throw new ResponseError('Unexpected error occured', responseData);
    });
}
