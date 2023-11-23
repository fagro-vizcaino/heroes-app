import { MarvelPage } from "../pages/Marvel";
import { DcPage } from "../pages/Dc";
import { SearchPage } from "../pages/Search";
import { HeroesPage } from "../pages/Heroes";

export function HeroesRoutes() {
  const routes = [
    {
      path: "marvel",
      element: <MarvelPage />,
    },
    {
      path: "dc",
      element: <DcPage />,
    },
    {
      path: "search",
      element: <SearchPage />,
    },
    {
      path: "hero/:id",
      element: <HeroesPage />,
    },
  ];
  return routes;
}
