import React from 'react';
import { IButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';

const Button: React.FC<IButtonProps> = ({ name, type, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {name}
    </StyledButton>
  );
};

export default Button;
