import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
