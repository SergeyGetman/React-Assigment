import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import React from "react";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import {DefaultBackgroundHome} from "./components/Ui_Layout/Visual.style";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <DefaultBackgroundHome>
            

        <App />
      </DefaultBackgroundHome>
    </ThemeProvider>
  </>,
);
