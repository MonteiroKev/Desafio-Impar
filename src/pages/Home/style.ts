import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min(90%, 65.37rem);
  margin: 0 auto;

  .titulo-principal {
    justify-content: space-between;

    h1 {
      font-size: 2rem;
      color: #5f1478;
      align-self: flex-end;
    }

    button {
      background: #e76316;
      border: none;
      color: white;
      padding: 0.75rem 1.43rem;
      border-radius: 8px;
      margin-top: 2rem;
      font-size: 1.12rem;
      font-weight: bold;
      box-shadow: 0px 3px 6px #92207242;
    }
  }
`;

export const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
