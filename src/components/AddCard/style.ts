import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 27.125rem;
  height: 27.125rem;
  text-align: center;
  background: white;
  border-radius: 8px;
  margin-top: 2.37rem;
  box-shadow: 0px 3px 6px #e5e5e5;
`;

export const ImageContainer = styled.div`
  svg {
    margin: 1.75rem 0 1.37rem 0;
    border: 1px solid #e4e4e4;
    border-radius: 999px;
    padding: 2.87rem;
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
  justify-content: center;
  opacity: 1;
  gap: 1.06rem;

  button {
    margin-top: 1.43rem;
    background: #db2525;
    border-radius: 8px;
    color: white;
    border: none;
    padding: 0.75rem 3.37rem;
    display: flex;
    align-items: center;
    font-size: 1.12rem;
    font-weight: bold;
  }
`;
