import { registrationFormResolver } from '@/graphql/schemas/forms/registrationForm';
import { useForm } from 'react-hook-form';

import { PrimaryButton } from '@/components/atoms/Button';
import { Form } from '@/components/atoms/forms/Form';
import { FormActions } from '@/components/atoms/forms/FormActions';
import { Textfield } from '@/components/molecules/forms/Textfield';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: registrationFormResolver
  });

  const onSubmit = handleSubmit((data) => {});

  return (
    <Form>
      <Textfield
        label="Username"
        placeholder="Username"
        className="input input-bordered"
        errorLabel={errors.username?.message?.toString()}
        {...register('username')}
      />
      <Textfield
        label="Email"
        type="email"
        placeholder="Email"
        className="input input-bordered"
        errorLabel={errors.email?.message?.toString()}
        {...register('email')}
      />
      <Textfield
        label="Password"
        type="password"
        placeholder="Password"
        className="input input-bordered"
        errorLabel={errors.password?.message?.toString()}
        {...register('password')}
      />
      <Textfield
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
        className="input input-bordered"
        errorLabel={errors.confirmPassword?.message?.toString()}
        {...register('confirmPassword')}
      />
      <FormActions>
        <PrimaryButton onClick={onSubmit}>Register</PrimaryButton>
      </FormActions>
    </Form>
  );
};
