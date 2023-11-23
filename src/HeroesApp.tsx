import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Navbar } from "./ui/components/Navbar";
import { AuthProvider } from "./auth/contexts/AuthProvider";

export function HeroesApp() {
  const heroesRouter = AppRouter();

  return (
    <>
      <AuthProvider>
        <RouterProvider router={heroesRouter} />
      </AuthProvider>
    </>
  );
}
