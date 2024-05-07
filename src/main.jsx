import React from "react";
import ReactDOM from "react-dom/client";

// theme MUI
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

// elements
import Home from "./pages/Home.jsx";
import NotFound from "./NotFound.jsx";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
