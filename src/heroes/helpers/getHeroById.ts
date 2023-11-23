import { heroes } from "../data/heroes";

export async function getHeroById(id: number) {
  const dataResult = await heroes();
  console.log("data from hero by id", dataResult);
  
  const heroFound = dataResult.find((c) => c.id === id);
  console.log("data found", heroFound);

  return heroFound;
}
