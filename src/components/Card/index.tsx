import { PencilSimple, Trash } from "phosphor-react";
import imagemCard from "../../assets/icone.svg";
import { ButtonContainer, CardContainer, ImageContainer } from "./style";

export function Card() {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={imagemCard} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur </p>
      </ImageContainer>
      <ButtonContainer>
        <button>
          <Trash size={20} />
          Excluir
        </button>
        <button>
          <PencilSimple color="#E76316" size={20} />
          Editar
        </button>
      </ButtonContainer>
    </CardContainer>
  );
}
