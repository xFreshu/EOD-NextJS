'use client';

import { FC } from 'react';
import Card from './components/Card/Card';
import { Wrapper } from './app.styled';

const App: FC = () => {
  return (
    <Wrapper>
      <div>
        <h1>Elektorniczny obieg dokumentów</h1>
        <h2>Praca magisterka</h2>
      </div>
      <Card auth={true}>Test</Card>
    </Wrapper>
  );
};

export default App;
