import { PageWrapper } from '@/components/templates/PageWrapper';

import { LoginForm } from '../organisms/forms/LoginForm';

export const Login = () => {
  return (
    <PageWrapper title="Login">
      <LoginForm />
    </PageWrapper>
  );
};
