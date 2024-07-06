import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomInput from '../CustomInput/CustomInput';
import styled from 'styled-components';

interface IFormInput {
  username: string;
  password: string;
  rememberMe: boolean;
}

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginForm: React.FC = () => {
  const methods = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <CustomInput name="username" label="Username" />
        <CustomInput name="password" label="Password" type="password" />

        <div>
          <label htmlFor="rememberMe">
            <input
              id="rememberMe"
              type="checkbox"
              {...methods.register('rememberMe')}
            />
            Remember me
          </label>
        </div>

        <Button type="submit">Login</Button>
      </Form>
    </FormProvider>
  );
};

export default LoginForm;
