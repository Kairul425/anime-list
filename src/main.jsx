import React from "react";
import ReactDOM from "react-dom/client";

// theme MUI
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

// elements
import Home from "./pages/Home.jsx";
import NotFound from "./NotFound.jsx";
import TopAnime from "./pages/TopAnime.jsx";
import AiringAnime from "./pages/AiringAnime.jsx";
import UpcommingAnime from "./pages/UpcommingAnime.jsx";
import DetailAnime from "./pages/DetailAnime.jsx";
import SearchResult from "./pages/SearchResult.jsx";

// layout
import Layout from "./Layout.jsx";

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
    element: (
      <Layout>
        <Home />
      </Layout>
    ), // Gunakan Layout sebagai pembungkus untuk halaman
  },
  {
    path: "/top-anime",
    element: (
      <Layout>
        <TopAnime />
      </Layout>
    ), // Gunakan Layout sebagai pembungkus untuk halaman
  },
  {
    path: "/airing-anime",
    element: (
      <Layout>
        <AiringAnime />
      </Layout>
    ), // Gunakan Layout sebagai pembungkus untuk halaman
  },
  {
    path: "/upcomming-anime",
    element: (
      <Layout>
        <UpcommingAnime />
      </Layout>
    ), // Gunakan Layout sebagai pembungkus untuk halaman
  },
  {
    path: "/detail-anime/:id",
    element: (
      <Layout>
        <DetailAnime />
      </Layout>
    ), // Gunakan Layout sebagai pembungkus untuk halaman
  },
  {
    path: "/search-result",
    element: (
      <Layout>
        <SearchResult />
      </Layout>
    ), // Gunakan Layout sebagai pembungkus untuk halaman
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
