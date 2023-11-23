import { FormEvent, useEffect, useState } from "react";
import { getHeroBySearchTerm } from "../helpers/getHeroBySearchTerm";
import { SearchList } from "../components/SearchList";
import { SearchHero } from "../components/SearchItem";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { SearchForm } from "../components/SearchForm";
import { WarningMessage } from "../components/warningMessage";

function serializeFormQuery(form) {
  const formData = new FormData(form);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  return data;
}

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { asc } = useParams();
  const nav = useNavigate();
  const [myHeroes, setMyHeroes] = useState<SearchHero[]>();

  const setHeroesBySearchTerm = async (
    searchTerm: string | null,
    asc: string | undefined
  ) => {
    if (!searchTerm) return;
    console.log("about to sort", asc);

    const heroes = await getHeroBySearchTerm(searchTerm);
    setMyHeroes(heroes);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
    searchTerm: string
  ) => {
    event.preventDefault();
    await setHeroesBySearchTerm(searchTerm, asc);
    const params = serializeFormQuery(event.target);
    setSearchParams(params);
  };

  useEffect(() => {
    if (searchParams) {
      setHeroesBySearchTerm(searchParams.get("searchTerm"), asc);
    }
  }, []);

  const showSearchResult = () => {
    if (searchParams.get("searchTerm") && (myHeroes ?? [])?.length === 0)
      return (
        <WarningMessage
          title={"Busqueda sin resultados"}
          message={"Tu busqueda no genero ningun resultado."}
        />
      );
    else return <SearchList heroes={myHeroes as SearchHero[]} />;
  };

  return (
    <>
      <h3 className="font-semibold text-2x my-2">Search page</h3>
      <SearchForm handleSubmit={handleSubmit} />

      <section className="container mx-auto my-8">{showSearchResult()}</section>
    </>
  );
}
