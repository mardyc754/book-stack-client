import { PrimaryButton } from '@/components/atoms/Button';
import { Form } from '@/components/atoms/forms/Form';
import { FormActions } from '@/components/atoms/forms/FormActions';
import { Textfield } from '@/components/molecules/forms/Textfield';

export const LoginForm = () => {
  return (
    <Form>
      <Textfield
        label="Username"
        placeholder="Username"
        className="input input-bordered"
      />
      <Textfield
        label="Password"
        type="password"
        placeholder="Password"
        className="input input-bordered"
      />
      <FormActions>
        <PrimaryButton>Login</PrimaryButton>
      </FormActions>
    </Form>
  );
};
