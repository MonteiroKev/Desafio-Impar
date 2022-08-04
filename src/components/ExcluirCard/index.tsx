import { Trash, XCircle } from "phosphor-react";
import { ContainerButton, ContainerExclude, ContainerImg } from "./style";

export function ExcluirCard() {
  return (
    <ContainerExclude>
      <XCircle size={32} weight="fill" />
      <ContainerImg>
        <Trash />
      </ContainerImg>

      <h2>Exluir</h2>
      <small>CERTEZA QUE DESEJA EXCLUIR</small>
      <ContainerButton>
        <button>Excluir</button>
        <button>Cancelar</button>
      </ContainerButton>
    </ContainerExclude>
  );
}
