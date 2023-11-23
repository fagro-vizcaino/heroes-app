import { useSearchParams } from "react-router-dom";
import { SearchHero } from "./SearchItem";
import { SearchList } from "./SearchList";
import { FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

export function SearchForm({ handleSubmit }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { formState, handleChange, handleReset } = useForm({
    searchTerm: searchParams.get("searchTerm") ?? "",
  });

  const { searchTerm } = formState;
  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    handleSubmit(event, searchTerm);
  }
  return (
    <>
      <section>
        <form onSubmit={handleFormSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              name="searchTerm"
              onChange={handleChange}
              value={searchTerm}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

type Props = {
  handleSubmit: (event: FormEvent<HTMLFormElement>, searchTerm: string) => void;
};
