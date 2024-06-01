import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GraphQLError } from 'graphql';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { user } from '@/lib/tanstack-query/queryKeys';

import { login } from '@/api/auth';

import {
  type LoginData,
  LoginResponse,
  loginFormResolver
} from '@/schemas/auth';

import { PrimaryButton } from '@/components/atoms/Button';
import { Form } from '@/components/atoms/forms/Form';
import { FormActions } from '@/components/atoms/forms/FormActions';
import { Textfield } from '@/components/molecules/forms/Textfield';

export const LoginForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError
  } = useForm<LoginData>({
    resolver: loginFormResolver
  });

  const mutation = useMutation<LoginResponse, GraphQLError, LoginData>({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: user.all });
      return navigate('/');
    },
    onError: (error) => {
      setError('username', { message: error.message });
      return;
    }
  });

  const onSubmit = handleSubmit((values, e) => {
    e?.preventDefault();

    mutation.mutate(values);
  });

  return (
    <Form onSubmit={onSubmit}>
      <Textfield
        label="Username"
        placeholder="Username"
        className="input input-bordered"
        errorLabel={errors.username?.message}
        {...register('username')}
      />
      <Textfield
        label="Password"
        type="password"
        placeholder="Password"
        className="input input-bordered"
        errorLabel={errors.password?.message}
        {...register('password')}
      />
      <FormActions>
        <PrimaryButton type="submit">Login</PrimaryButton>
      </FormActions>
    </Form>
  );
};
