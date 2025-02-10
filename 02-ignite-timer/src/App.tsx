import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { CyclesContextProvider } from "./contexts/CyclesContext";

export function App() {
  return (
    // fornecendo os recursos padrões - default themes
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      {/* definindo estilos globais */}
      <GlobalStyle />
    </ThemeProvider>
  );
}
