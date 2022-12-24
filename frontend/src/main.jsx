import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { UserContextProvider } from "./context/UserContext";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import "./styles/App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./components/AdminDashboard/AdminProducts";
import AdminUsers from "./components/AdminDashboard/AdminUsers";
import NewProductForm from "./components/AdminDashboard/NewProductForm";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <div>User</div>,
      },
      {
        path: "/products/:productSlug",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products",
        element: <AdminProducts />,
      },
      {
        path: "products/edit/:productSlug",
        element: <div>Edit Product</div>,
      },
      {
        path: "products/create",
        element: <NewProductForm />,
      },
      {
        path: "users",
        element: <AdminUsers />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserContextProvider>
  </React.StrictMode>
);
