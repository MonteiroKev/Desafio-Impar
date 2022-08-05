import { Trash, XCircle } from "phosphor-react";
import {
  ContainerButton,
  ContainerClose,
  ContainerExclude,
  ContainerImg
} from "./style";

interface ExcludeCardProps {
  setIsOpen: () => void;
}

export function ExcludeCard({ setIsOpen }:ExcludeCardProps) {
  return (
    <ContainerExclude>
      <ContainerClose onClick={setIsOpen}>
        <XCircle size={50} weight="fill" />
      </ContainerClose>

      <ContainerImg >
        <Trash />
      </ContainerImg>

      <h2>Excluir</h2>
      <p>CERTEZA QUE DESEJA EXCLUIR?</p>
      <ContainerButton>
        <button>Excluir</button>
        <button>Cancelar</button>
      </ContainerButton>
    </ContainerExclude>
  );
}
