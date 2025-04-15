import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./context/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <StoreProvider>
      <App />

    </StoreProvider>

  </BrowserRouter>
);

