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
import DetailUpcomming from "./pages/DetailUpcomming.jsx";

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
    ),
  },
  {
    path: "/top-anime",
    element: (
      <Layout>
        <TopAnime />
      </Layout>
    ),
  },
  {
    path: "/airing-anime",
    element: (
      <Layout>
        <AiringAnime />
      </Layout>
    ),
  },
  {
    path: "/upcomming-anime",
    element: (
      <Layout>
        <UpcommingAnime />
      </Layout>
    ),
  },
  {
    path: "/detail-anime/:id",
    element: (
      <Layout>
        <DetailAnime />
      </Layout>
    ),
  },
  {
    path: "/detail-upcomming/:id",
    element: (
      <Layout>
        <DetailUpcomming />
      </Layout>
    ),
  },
  {
    path: "/search-result",
    element: (
      <Layout>
        <SearchResult />
      </Layout>
    ),
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
