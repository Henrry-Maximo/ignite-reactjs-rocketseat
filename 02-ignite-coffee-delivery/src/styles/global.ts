import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['background']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'DM Sans', sans-serif;
    
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
