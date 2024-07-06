'use client';
import StyledComponentsRegistry from '../lib/registry';
import GlobalStyle from './styles/GlobalStyle';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Toaster />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
