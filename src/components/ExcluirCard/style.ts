import styled from "styled-components";

export const ContainerExclude = styled.div`
  width: 100%;
  max-width: 27.37rem;
  background: white;
  margin: 0 auto;
  height: 100%;
  text-align: center;

  h2 {
    color: #db2525;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.81rem;
  }

  p {
    font-weight: bold;
    font-size: 0.75rem;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 1.75rem;
    max-width: 22.5rem;
    margin: 0 auto;
  }
`;

export const ContainerClose = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: -1rem;

  svg {
    color: #e76316;
  }
`;

export const ContainerImg = styled.div`
  border: 6px solid #e4e4e4;
  background: #db25250f;
  width: 9.93rem;
  height: 9.93rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  margin: 3.12rem auto 1.56rem auto;

  svg {
    font-size: 4.25rem;
    color: #db2525;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  max-width: 23rem;
  margin: 0 auto;
  justify-content: space-between;

  button {
    border-top: 1px solid #e4e4e4;
    font-size: 1.12rem;
    width: 10.5rem;
    height: 3rem;
    font-weight: bold;
    color: white;
    border: none;
    background: #db2525;
    border-radius: 8px;
    margin: 3.18rem auto 2.06rem auto;
    box-shadow: 0px 3px 6px #92207242;
  }
`;
