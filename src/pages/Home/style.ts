import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  .titulo-principal {
    display: flex;
    justify-content: space-between;
    width: 100%;

    h1 {
      font-size: 2rem;
      color: #5f1478;
      align-self: flex-end;
    }

    button {
      background: #e76316;
      border: none;
      color: white;
      padding: 0.81rem 2.62rem;
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

export const Content = styled.div`
  max-width: 65.37rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MotionContainer = styled(motion.div)``;
