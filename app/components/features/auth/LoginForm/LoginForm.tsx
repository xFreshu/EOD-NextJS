'use client';

import { FC } from 'react';
import { Form } from '../../../layout/AuthLayout/AuthLayout.styled';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ILoginFormInput } from './LoginForm.types';
import CustomInput from '../../../common/CustomInput/CustomInput';
import Button from '../../../common/Button/Button';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  rememberMe: yup.boolean().optional(),
});

const LoginForm: FC = () => {
  const router = useRouter();

  const methods = useForm<ILoginFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    toast.success(`Success: ${JSON.stringify(data)}`, {
      position: 'top-right',
      autoClose: 1000,
    });
    console.log(data);
    router.push('/dashboard');
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
