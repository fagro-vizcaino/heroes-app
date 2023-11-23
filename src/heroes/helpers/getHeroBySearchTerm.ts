import { heroes } from "../data/heroes";

export async function getHeroBySearchTerm(searchTerm: string) {
  const dataResult = await heroes();
  console.log("my heroes", { searchTerm, dataResult });

  const heroesBySearchTerm = dataResult.filter((it) =>
    it.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return heroesBySearchTerm;
}
