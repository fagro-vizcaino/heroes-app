import React, { ReactNode } from "react";
import { HeroItem } from "./HeroItem";
import { SearchHero } from "./SearchItem";

export function SearchList({ heroes }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* <!-- Thumbnail 1 --> */}
      {heroes?.length > 0 ? (
        heroes.map((it) => <HeroItem key={it.id} hero={it} />)
      ) : (
        <></>
      )}
    </div>
  );
}

type Props = {
  heroes: SearchHero[];
};
