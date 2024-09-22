import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 1rem;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.span`
  text-align: left !important;
  color: red;
  font-size: 1.6rem;
  display: flex;
  margin-top: 1rem;
`;
