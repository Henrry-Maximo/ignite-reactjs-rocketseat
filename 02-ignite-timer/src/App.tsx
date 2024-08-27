import { ThemeProvider } from "styled-components"; 
import { Button } from "./components/Button";
import { defaulTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />
    </ThemeProvider>
  );
}
