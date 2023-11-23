import { HeroList } from "../components/HeroList";

export function MarvelPage() {
  const publisher = "Marvel Comics";
  return (
    <>
      <h2 className="text-2xl font-semibold">Marvel</h2>
      <hr className="border-2 my-10 border-gray-200" />
      <HeroList publisher={publisher} />
    </>
  );
}
