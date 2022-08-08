import { PencilSimple, Trash } from "phosphor-react";
import { useState } from "react";
import { CardModalAdd } from "../Modal/CardModalAdd";
import { CardModalClose } from "../Modal/CardModalClose";
import { ButtonContainer, CardContainer, ImageContainer } from "./style";

type PropsPokemon = {
  name: string;
  url: string;
};

export function Card(props: PropsPokemon) {
  const [isOpen, setIsOpen] = useState(false);
  const [IsOpenAdd, setIsOpenAdd] = useState(false);

  let id_imagem = props.url.split("/pokemon/")[1].split("/")[0];
  let imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id_imagem}.png`;

  return (
    <>
      <CardContainer>
        <ImageContainer>
          <img src={imagem} alt="" />
          <p>{props.name}</p>
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
