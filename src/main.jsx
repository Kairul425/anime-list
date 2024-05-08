import React from "react";
import ReactDOM from "react-dom/client";

// theme MUI
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

// elements
import Home from "./pages/Home.jsx";
import NotFound from "./NotFound.jsx";
import TopAnime from "./pages/TopAnime.jsx";
import AiringAnime from "./pages/AiringAnime.jsx";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  //not found pages
  {
    path: "*",
    element: <NotFound />,
  },
  //pages
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/top-anime",
    element: <TopAnime />,
  },
  {
    path: "/airing-anime",
    element: <AiringAnime />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
