import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/home";
import FestivalPage from "./pages/festival";
import AccommodationPage from "./pages/accommodation";
import TouristAttrPage from "./pages/tourist-attr";
import MyPage from "./pages/my";
import NavBanner from "./components/NavBanner";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "",
          element: <NavBanner />,
          children: [
            {
              path: "festival",
              element: <FestivalPage />,
            },
            {
              path: "accommodation",
              element: <AccommodationPage />,
            },
            {
              path: "tourist-attr",
              element: <TouristAttrPage />,
            },
          ],
        },
        {
          path: "my",
          element: <MyPage />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
