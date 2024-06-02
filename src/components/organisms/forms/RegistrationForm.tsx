import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { signUp } from '@/api/auth';

import {
  RegistrationData,
  RegistrationResponse,
  registrationFormResolver
} from '@/schemas/auth';

import { PrimaryButton } from '@/components/atoms/Button';
import { Form } from '@/components/atoms/forms/Form';
import { FormActions } from '@/components/atoms/forms/FormActions';
import { Textfield } from '@/components/molecules/forms/Textfield';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<RegistrationData>({
    resolver: registrationFormResolver
  });
  const navigate = useNavigate();

  const { mutate } = useMutation<RegistrationResponse, Error, RegistrationData>(
    {
      mutationFn: signUp,
      onSuccess: () => {
        navigate('/login');
      },
      onError: (error) => {
        setError('username', { message: error.message });
        return;
      }
    }
  );

  const onSubmit = handleSubmit((values, e) => {
    e?.preventDefault();

    mutate(values);
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
        label="Email"
        type="email"
        placeholder="Email"
        className="input input-bordered"
        errorLabel={errors.email?.message}
        {...register('email')}
      />
      <Textfield
        label="Password"
        type="password"
        placeholder="Password"
        className="input input-bordered"
        errorLabel={errors.password?.message}
        {...register('password')}
      />
      <Textfield
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
        className="input input-bordered"
        errorLabel={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <FormActions>
        <PrimaryButton type="submit">Register</PrimaryButton>
      </FormActions>
    </Form>
  );
};
