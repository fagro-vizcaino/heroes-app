import { Link } from "react-router-dom";

export function HeroItem({ hero }: Props) {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition">
      <img
        className="w-full h-auto rounded-t-xl"
        src={hero.images.sm}
        alt="Image Description"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-semibold text-gray-80">{hero.name}</h3>
        <p className="mt-1 text-xs font-medium uppercase text-gray-500">
          {hero.biography.fullName}
        </p>
        <p className="mt-1 text-gray-500 text-sm"></p>
        <p className="mt-5 text-xs text-gray-500">
          {hero.biography.firstAppearance}
        </p>
        <Link
          to={`/hero/${hero.id}`}
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
        >
          More Info
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

type Props = {
  hero: any;
};
