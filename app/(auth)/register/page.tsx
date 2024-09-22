'use client';

import AuthLayout from '../../components/layout/AuthLayout/AuthLayout';
import RegisterForm from '../../components/features/auth/RegisterForm/RegisterForm';

const Page = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Page;
