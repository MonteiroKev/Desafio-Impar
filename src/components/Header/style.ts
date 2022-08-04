import styled from "styled-components";
import background from "../../assets/fundo-busca.png";

export const HeaderContainer = styled.header`
  background: transparent linear-gradient(272deg, #ae276f 0%, #5f1478 100%) 0%
    0% no-repeat padding-box;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1.5rem;
  box-shadow: 0px 3px 6px #00000029;
`;

export const SectionContainer = styled.div`
  background: url(${background});
  min-height: 16.31rem;
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  margin-top: 5.18rem;
  position: relative;
  max-width: 65.37rem;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 100%;
    font-size: 1.5rem;
    padding: 1.43rem 0;
    border-radius: 8px;
    border: none;
    padding-left: 1.5rem;
  }

  input::placeholder {
    opacity: 0.5;
  }

  svg {
    position: absolute;
    right: 1.5rem;
    opacity: 0.5;
  }
`;
