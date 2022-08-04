import { PencilSimple, Trash } from "phosphor-react";
import { useState } from "react";
import imagemCard from "../../assets/icone.svg";
import { CardModal } from "../modal";
import { ButtonContainer, CardContainer, ImageContainer } from "./style";

export function Card() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <img src={imagemCard} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </ImageContainer>
        <ButtonContainer>
          <button onClick={() => setIsOpen(true)}>
            <Trash size={20} />
            Excluir
          </button>
          <button>
            <PencilSimple color="#E76316" size={20} />
            Editar
          </button>
        </ButtonContainer>
      </CardContainer>
      <CardModal setIsOpen={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
}
