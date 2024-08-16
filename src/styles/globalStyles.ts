import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 3;
    padding: 2;
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }
`;

export default GlobalStyle;