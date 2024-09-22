'use client';
import { ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import StyledComponentsRegistry from '../lib/registry';
import GlobalStyle from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
          <ToastContainer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
