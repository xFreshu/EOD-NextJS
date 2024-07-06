'use client';

import { FC } from 'react';
import Card from './components/Card/Card';
import { Wrapper } from './app.styled';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import LoginForm from './components/LoginForm/LoginForm';

interface ILoginFormInput {
  username: string;
  password: string;
  rememberMe: boolean;
}

const App: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>();

  const notify = () => toast('Here is your toast.');

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    console.log(data);
  };
  return (
    <Wrapper>
      <div>
        <h1>Elektorniczny obieg dokumentów</h1>
        <h2>Praca magisterka</h2>
      </div>
      <div>
        <LoginForm />
      </div>
    </Wrapper>
  );
};

export default App;
