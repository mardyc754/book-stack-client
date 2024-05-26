import { PrimaryButton } from '@/components/atoms/Button';
import { Form } from '@/components/atoms/forms/Form';
import { FormActions } from '@/components/atoms/forms/FormActions';
import { Textfield } from '@/components/molecules/forms/Textfield';

export const RegistrationForm = () => {
  return (
    <Form>
      <Textfield
        label="Email"
        type="email"
        placeholder="Email"
        className="input input-bordered"
      />
      <Textfield
        label="Password"
        type="password"
        placeholder="Password"
        className="input input-bordered"
      />
      <Textfield
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
        className="input input-bordered"
      />
      <FormActions>
        <PrimaryButton>Register</PrimaryButton>
      </FormActions>
    </Form>
  );
};
