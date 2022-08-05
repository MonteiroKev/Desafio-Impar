import { PencilSimple, Trash } from "phosphor-react";
import { useState } from "react";
import imagemCard from "../../assets/icone.svg";
import { CardModalAdd } from "../modal/CardModalAdd";
import { CardModalClose } from "../modal/CardModalClose";
import { ButtonContainer, CardContainer, ImageContainer } from "./style";

export function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [IsOpenAdd, setIsOpenAdd] = useState(false);
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
          <button onClick={() => setIsOpenAdd(true)}>
            <PencilSimple color="#E76316" size={20} />
            Editar
          </button>
        </ButtonContainer>
      </CardContainer>
      <CardModalAdd
        setIsOpenAdd={() => setIsOpenAdd(false)}
        IsOpenAdd={IsOpenAdd}
      />
      <CardModalClose setIsOpen={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
}
