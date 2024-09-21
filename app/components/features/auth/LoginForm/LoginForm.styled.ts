import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  div {
    margin: 1rem;
    input {
      margin-right: 1rem;
    }
  }
  span {
    text-align: center;
    margin: 1rem;
  }
`;
