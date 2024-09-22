import { ReactNode } from 'react';
import { Wrapper, LoginContainer, HeaderContainer } from './AuthLayout.styled';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <HeaderContainer>
        <h1>Elektorniczny obieg dokumentów</h1>
        <h2>Praca magisterka</h2>
      </HeaderContainer>
      <LoginContainer>{children}</LoginContainer>
    </Wrapper>
  );
};

export default AuthLayout;
