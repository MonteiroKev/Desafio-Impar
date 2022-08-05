import { MagnifyingGlass } from "phosphor-react";
import { SearchSty } from "./style";

export function Search() {
  return (
    <SearchSty>
      <div className="wrapper-input">
        <input type="text" placeholder="Digite aqui sua busca" />
        <MagnifyingGlass size={49} />
      </div>
    </SearchSty>
  );
}
