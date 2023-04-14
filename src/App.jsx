import { CssBaseline, ThemeProvider } from "@mui/material";
import { FormOfPayment } from "./components/FormOfPayment";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormOfPayment />
    </ThemeProvider>
  );
}

export default App;
