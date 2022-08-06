import { MagnifyingGlass } from "phosphor-react";
import { SearchSty } from "./style";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function Search({ search, setSearch }: SearchProps) {
  return (
    <SearchSty>
      <div className="wrapper-input">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Digite aqui sua busca"
        />
        <MagnifyingGlass size={49} />
      </div>
    </SearchSty>
  );
}
