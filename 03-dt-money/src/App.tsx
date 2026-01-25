import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transaction";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      
      <GlobalStyle />
    </ThemeProvider>
  );
};

// Acessibilidade, modal, requisição HTTP, conexão com API, gerenciamento de estados via contexto, performance.