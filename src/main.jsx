import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App, { appRouter } from "./App.jsx";
import "./assets/index.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </StrictMode>
);
