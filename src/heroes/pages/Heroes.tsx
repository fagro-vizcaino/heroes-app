import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useEffect, useMemo, useState } from "react";

export function HeroesPage() {
  const { id, ...rest } = useParams();
  const nav = useNavigate();

  console.log("search id", id);
  const [hero, setHero] = useState<any>();

  const getHero = async (id: string | undefined) => {
    const currentId = id ? parseInt(id) : 0;
    const result = await getHeroById(currentId);
    setHero(result);
  };

  useEffect(() => {
    getHero(id);
  }, []);

  const handleReturn = () => {
    nav(-1);
  };

  return (
    <>
      {/* <!-- Features --> */}
      <div className="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-10 mx-auto ">
        <button
          type="button"
          onClick={handleReturn}
          className=" my-3 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Back
        </button>
        {/* <!-- Grid --> */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-4 xl:gap-10">
          <div>
            <img
              className="rounded-xl animate__animated animate__fadeInLeft"
              src={hero?.images.lg}
              alt="Image Description"
            />
          </div>
          {/* <!-- End Col --> */}

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* <!-- Title --> */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
                  {hero?.name}
                </h2>
                <p className="text-gray-500">{hero?.biography.fullName}</p>
                <p className="text-gray-500">{hero?.work.occupation}</p>
              </div>
              {/* <!-- End Title --> */}

              {/* <!-- List --> */}
              <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    Race{" "}
                    <span className="font-bold">{hero?.appearance.race}</span>
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    Height:{" "}
                    <span className="font-bold">
                      {hero?.appearance.height[0]}
                    </span>
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    Weight:{" "}
                    <span className="font-bold">
                      {hero?.appearance.weight[0]}
                    </span>
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    Place of birth:{" "}
                    <span className="font-bold">
                      {hero?.biography.placeOfBirth}
                    </span>
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    Place of birth:{" "}
                    <span className="font-bold">
                      {hero?.biography.firstAppearance}
                    </span>
                  </span>
                </li>
              </ul>
              {/* <!-- End List --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Features --> */}
    </>
  );
}
