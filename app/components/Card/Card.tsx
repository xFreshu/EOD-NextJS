'use client';

import React, { ReactNode } from 'react';
import StyledCard from './Card.styled';

interface ICardProps {
  children: ReactNode;
  auth?: boolean;
}

const Card: React.FC<ICardProps> = ({ children, auth }) => {
  return <StyledCard auth={auth}>{children}</StyledCard>;
};

export default Card;
