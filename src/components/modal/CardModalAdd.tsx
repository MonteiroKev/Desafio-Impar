import { motion } from "framer-motion";
import Modal from "react-modal";
import styled from "styled-components";
import { AddCard } from "../AddCard";

interface CardModalAddProps {
  IsOpenAdd: boolean;
  setIsOpenAdd: () => void;
}

const MotionContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: #f6f4f6cc;
  cursor: pointer;
`;

export const CardModalAdd = ({
  IsOpenAdd,
  setIsOpenAdd,
}: CardModalAddProps) => {
  Modal.setAppElement("body");

  return (
    <>
      <Modal
        isOpen={IsOpenAdd}
        onRequestClose={setIsOpenAdd}
        overlayClassName="teste"
        className="react-modal-content"
      >
        <MotionContainer
          onClick={setIsOpenAdd}
          initial={{ x: 4000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0.5 }}
          transition={{
            duration: 0.4,
            ease: "easeIn",
          }}
        >
          <AddCard />
        </MotionContainer>
      </Modal>
    </>
  );
};
