'use client';

import React, { FC } from 'react';
import { Form } from '../../../layout/AuthLayout/AuthLayout.styled';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomInput from '../../../common/CustomInput/CustomInput';
import { IRegisterForm } from './RegisterForm.types';
import Button from '../../../common/Button/Button';

const schema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must not exceed 20 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    ),
  repeatPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const RegisterForm: FC = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
    toast.success(`Success: ${JSON.stringify(data)}`, {
      position: 'top-right',
      autoClose: 1000,
    });
    console.log(data);
  };

  const methods = useForm<IRegisterForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  return (
    <div>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <CustomInput name="username" label="Username" />
          <CustomInput name="email" label="E-mail" />
          <CustomInput name="password" label="Password" />
          <CustomInput name="repeatPassword" label="Repeat Password" />
          <Button name={'Create account'} type={'submit'} />
          <span>or</span>
          <Button
            name={'Log In'}
            type={'button'}
            onClick={() => router.push('/')}
          />
        </Form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
