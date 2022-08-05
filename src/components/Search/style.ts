import styled from "styled-components";
import background from "../../assets/fundo-busca.png";



export const SearchSty = styled.div`
  background: url(${background});
  background-size: cover;
  background-position: center;
  height: 16.31rem;
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper-input {
    width: 65.37rem;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: #fff;
    padding-left: 1.5rem;
  }

  input {
    width: 92%;
    font-size: 1.5rem;
    padding: 1.43rem 0;
    border: none;
    /* padding-left: 3rem; */
  }

  input::placeholder {
    opacity: 0.5;
  }

  svg {
    opacity: 0.5;
  }
`;
