import { MagnifyingGlass } from "phosphor-react";
import logo from "../../assets/logo-teste.svg";
import { HeaderContainer, InputContainer, SectionContainer } from "./style";

export function Header() {
  return (
    <>
      <SectionContainer>
        <HeaderContainer>
          <img src={logo} alt="" />
        </HeaderContainer>
        <InputContainer>
          <input type="text" placeholder="Digite aqui sua busca" />
          <MagnifyingGlass size={49} />
        </InputContainer>
      </SectionContainer>
    </>
  );
}
