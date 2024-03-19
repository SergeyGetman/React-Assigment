import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
const queryClient = new QueryClient();
import styles from "./assets/globalStyle.module..css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Home className={styles.l_store} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
