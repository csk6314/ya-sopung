import { createBrowserRouter, RouterProvider } from "react-router-dom";

//style
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

//components(pages)
import Layout from "./components/layout";
import HomePage from "./pages/home";
import MyPage from "./pages/my";
import NavBanner from "./components/NavBanner";
import DetailPage from "./pages/detail";
import SearchPage from "./pages/search";

//lib
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
            element: <SearchPage />,
          },
          {
            path: "accommodation",
            element: <SearchPage />,
          },
          {
            path: "tourist-attr",
            element: <SearchPage />,
          },
        ],
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "my",
        element: <MyPage />,
      },
    ],
  },
]);
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        throwOnError: true,
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
