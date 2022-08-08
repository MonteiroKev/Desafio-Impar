import styled from "styled-components";

export const ContainerNewCard = styled.div`
  height: 100vh;
  max-width: 40.12rem;
  flex-direction: column;
  background: white;
  padding: 2.56rem 2.18rem;

  header {
    display: flex;
    align-items: center;
    gap: 1.12rem;
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #5f1478;
    }
  }

  form {
    border-top: 1px solid #b9b9b9;
    border-bottom: 1px solid #b9b9b9;
    padding-block: 2.7rem 3.18rem;
  }

  form p {
    font-weight: bold;
    font-size: 0.87rem;
    margin-bottom: 0.74rem;
  }

  input {
    width: 100%;
    border-radius: 8px;
    height: 3.75rem;
    border: 1px solid #b9b9b9;
    padding-left: 1.56rem;
    margin-bottom: 3.13rem;
  }

  input::placeholder {
    font-size: 1.12rem;
    font-weight: 300;
  }

  button {
    max-width: 10.43rem;
    background: #e76316;
    border: none;
    color: white;
    padding: 0.75rem 1.43rem;
    border-radius: 8px;
    margin-top: 2rem;
    font-size: 1.12rem;
    font-weight: bold;
    box-shadow: 0px 3px 6px #92207242;

    &:hover {
      background: #fa5e04;
      transition: 0.5s;
    }
  }
`;

export const ContainerIncludeImg = styled.div`
  border: 1px solid #b9b9b9;
  padding: 1.18rem 0 1.18rem 1.56rem;
  border-radius: 8px;
  font-size: 1.12rem;
  font-weight: 300;
  input {
    display: none;
  }

  label {
    @media (max-width: 720px) {
      margin: 0 auto;
      padding: 0.2rem;
    }

    border-radius: 8px;
    padding: 0.75rem 2.5rem;
    border: 1px solid #e76316;
    font-size: 1.12rem;
    font-weight: bold;
    color: #e76316;
    margin: 0 0 0 4.9rem;
    cursor: pointer;

    &:hover {
      background: #e76316;
      color: white;
      transition: 0.3s;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
`;
