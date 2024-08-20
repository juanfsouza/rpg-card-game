import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom right, #0b001f, #060657);
    color: #ffffff;
  }

  button {
    background-color: #0000ff;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
  }

  button:disabled {
    background-color: #555555;
    cursor: not-allowed;
  }

  h2 {
    color: #ffffff;
  }
`;

export default GlobalStyle;
