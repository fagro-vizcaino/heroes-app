import { heroes } from "../data/heroes";

export async function getHeroesByPublisher(publisher: string) {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error("No publisher found");
  }

  const dataResult = await heroes();
  const heroesByPublisher = dataResult.filter(
    (it) => it.biography.publisher === publisher
  );

  return heroesByPublisher;
}
