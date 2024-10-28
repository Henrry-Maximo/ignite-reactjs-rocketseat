import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    height: 100vh;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
