import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ThemeProvider } from "styled-components";
import StatesProvider from "./context/StatesProvider";

const theme = {
  primaryColor: "#9b1fe9",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StatesProvider>
        <RouterProvider router={router}></RouterProvider>
      </StatesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
