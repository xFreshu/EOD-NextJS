import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px; // lub inna wartość w zależności od preferencji
  }

  body {
    font-family: 'Arial', sans-serif; // lub inna domyślna czcionka
  }
`;

export default GlobalStyle;
