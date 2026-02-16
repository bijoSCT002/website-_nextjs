import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./theme/initTheme";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeSync } from "./theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeSync />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
