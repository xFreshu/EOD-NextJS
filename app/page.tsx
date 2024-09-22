'use client';

import { FC } from 'react';
import LoginForm from './components/features/auth/LoginForm/LoginForm';
import AuthLayout from './components/layout/AuthLayout/AuthLayout';

const App: FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default App;
