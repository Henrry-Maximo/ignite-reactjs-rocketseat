import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transaction";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Project with Styled Components</h1>

      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  );
};