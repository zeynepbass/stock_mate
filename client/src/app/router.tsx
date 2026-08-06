import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import ProtectedRoute from "../routes/ProtectedRoute";
import ProductsPage from "@/features/products/pages/ProductsPage";
import ProductDetailPage from "@/features/products/pages/ProductDetailsPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
export const router = createBrowserRouter([
  { path: "/giris-yap", element: <LoginPage /> },
  { path: "/401", element: <UnauthorizedPage /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [

          { path: "/urunler", element: <ProductsPage /> },
          { path: "/urunler/:id", element: <ProductDetailPage /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
