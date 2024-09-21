'use client';

import { FC } from 'react';
import { Wrapper, HeaderContainer, LoginContainer } from './app.styled';
import LoginForm from './components/features/auth/LoginForm/LoginForm';

const App: FC = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <h1>Elektorniczny obieg dokumentów</h1>
        <h2>Praca magisterka</h2>
      </HeaderContainer>
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    </Wrapper>
  );
};

export default App;
