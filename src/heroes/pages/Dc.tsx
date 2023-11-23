import { HeroList } from "../components/HeroList";

export function DcPage() {
  const publisher = "DC Comics";
  return (
    <>
      <h2 className="text-2xl font-semibold">Dc comics</h2>
      <hr className="border-2 my-10 border-gray-200" />
      <HeroList publisher={publisher} />
    </>
  );
}
