import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AtividadesProvider } from "./AtividadesContext.jsx";
import "./style.css";
createRoot(document.getElementById("root")).render(
  <AtividadesProvider>
    <App />
  </AtividadesProvider>,
);
