import { Trash, XCircle } from "phosphor-react";
import { toast } from "react-toastify";
import {
  ContainerButton,
  ContainerClose,
  ContainerExclude,
  ContainerImg
} from "./style";

interface ExcludeCardProps {
  setIsOpen: () => void;
}

export function ExcludeCard({ setIsOpen }: ExcludeCardProps) {
  
  function handleNotification() {
    toast.error("Funcionalidade não foi aplicada");
  }

  return (
    <ContainerExclude>
      <ContainerClose onClick={setIsOpen}>
        <XCircle size={50} weight="fill" />
      </ContainerClose>

      <ContainerImg>
        <Trash />
      </ContainerImg>

      <h2>Excluir</h2>
      <p>CERTEZA QUE DESEJA EXCLUIR?</p>
      <ContainerButton>
        <button onClick={handleNotification}>Excluir</button>
        <button onClick={setIsOpen}>Cancelar</button>
      </ContainerButton>
    </ContainerExclude>
  );
}
