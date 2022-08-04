import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 14.62rem;
  text-align: center;
  background: white;
  border-radius: 8px;
  margin-top: 2.37rem;
  box-shadow: 0px 3px 6px #e5e5e5;
`;

export const ImageContainer = styled.div`
  img {
    margin: 1.75rem 0 1.37rem 0;
    border: 1px solid #e4e4e4;
    border-radius: 999px;
    padding: 1.12rem;
    background: #f6f4f6;
  }

  p {
    border-top: 1px solid #f0eff0;
    padding: 0.63rem 0 1.81rem 0;
    width: 10.57rem;
    margin: 0 auto;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-shadow: inset 0px 3px 6px #0000000f;
  opacity: 1;

  button {
    border: none;
    background: none;
    margin: 0.81rem;
    display: flex;
    align-items: center;
    margin-right: 0.73rem;
    font-size: 0.93rem;
    color: #263238;
    gap: 0.73rem;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
`;
