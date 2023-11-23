import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../auth/pages/Login";
import { Layout } from "../ui/components/Layout";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoutes } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export function AppRouter() {
  const heroesRotes = HeroesRoutes();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoutes>
          <Layout />
        </PrivateRoutes>
      ),
      children: heroesRotes,
    },
    {
      path: "login",
      element: (
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      ),
    },
  ]);

  return router;
}
