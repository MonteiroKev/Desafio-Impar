import { Trash } from "phosphor-react";
import { ButtonContainer, CardContainer, ImageContainer } from "./style";

export function AddCard() {
  return (
    <CardContainer>
      <ImageContainer>
        <Trash size={70} />
        <h2>Excluir</h2>
        <p>CERTEZA QUE DESEJA EXCLUIR</p>
      </ImageContainer>
      <ButtonContainer>
        <button>Excluir</button>
        <button>Cancelar</button>
      </ButtonContainer>
    </CardContainer>
  );
}
