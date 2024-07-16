'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Form } from './LoginForm.styled';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IFormInput } from './LoginForm.types';
import CustomInput from '../CustomInput/CustomInput';
import Button from '../Button/Button';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  rememberMe: yup.boolean().optional(),
});

const LoginForm: React.FC = () => {
  const router = useRouter();

  const methods = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
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
        <Button name={'Login'} type={'submit'} />
        <span>or</span>
        <Button
          name={'Register'}
          type={'button'}
          onClick={() => router.push('/register')}
        />
      </Form>
    </FormProvider>
  );
};

export default LoginForm;
