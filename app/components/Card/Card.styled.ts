import styled from 'styled-components';

interface ICardProps {
  auth?: boolean;
}

const StyledCard = styled.div<ICardProps>`
  background-color: #fff;
  border-radius: 8px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin: 20px;
  width: ${({ auth }) => (auth ? '400px' : 'auto')};
`;

export default StyledCard;
