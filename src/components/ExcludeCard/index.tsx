import { Trash, XCircle } from "phosphor-react";
import {
  ContainerButton,
  ContainerClose,
  ContainerExclude,
  ContainerImg,
} from "./style";

export function ExcludeCard() {
  return (
    <ContainerExclude>
      <ContainerClose>
        <XCircle size={50} weight="fill" />
      </ContainerClose>

      <ContainerImg>
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
