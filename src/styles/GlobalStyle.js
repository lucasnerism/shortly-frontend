import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
  }

  body{
    font-family:"Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
`;

export default GlobalStyle;