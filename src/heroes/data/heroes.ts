export async function heroes(): Promise<any[]> {
  const baseUrl =
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
  const heroesRequest = await fetch(baseUrl);
  const dataHeroes = await heroesRequest.json();
  console.log(`my heroes`, heroes);
  return dataHeroes;
}
