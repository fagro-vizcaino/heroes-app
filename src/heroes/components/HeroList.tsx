import React, { useEffect, useState } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroItem } from "./HeroItem";

export function HeroList({ publisher }: Props) {
  const [myHeroes, setMyHeroes] = useState<any[]>([]);

  const getHeroes = async (publisher: string) => {
    const heroes = await getHeroesByPublisher(publisher);
    setMyHeroes(heroes);
  };

  useEffect(() => {
    getHeroes(publisher);
  }, [publisher]);

  //const heroes = getHeroes(publisher);
  console.log(myHeroes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6 gap-6 animate__animated animate__fadeIn">
      {/* <!-- Hero Item --> */}
      {React.Children.toArray(myHeroes.map((it) => <HeroItem hero={it} />))}
    </div>
  );
}

type Props = {
  publisher: string;
};
