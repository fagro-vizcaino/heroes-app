import { useNavigate } from "react-router-dom";

export function SearchItem({
  image,
  title,
  fullName,
  occupation,
  heroName,
  heroId,
}: SearchHero) {
  const nav = useNavigate();

  const navigateToDetail = () => {
    nav(`/hero/${heroId}`);
  };
  return (
    <div className="bg-white rounded-lg shadow-md">
      <img
        src={image}
        alt="Thumbnail 2"
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{heroName}</h2>
        <p className="text-gray-500">{fullName}</p>
        <button
          onClick={navigateToDetail}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Info
        </button>
      </div>
    </div>
  );
}

export type SearchHero = {
  heroId: number;
  image: string;
  title: string;
  heroName: string;
  fullName: string;
  occupation: string;
};
