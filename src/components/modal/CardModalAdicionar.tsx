import { motion } from "framer-motion";
import Modal from "react-modal";
import styled from "styled-components";
import { AddCard } from "../AddCard";

interface CardModalAdicionarProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const MotionContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

export const CardModalAdicionar = ({
  isOpen,
  setIsOpen,
}: CardModalAdicionarProps) => {
  Modal.setAppElement("body");

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={setIsOpen}
        overlayClassName="react-modal-overlay-add"
        className="react-modal-content-add"
      >
        <MotionContainer
          initial={{ x: 600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
          }}
        >
          <AddCard />
        </MotionContainer>
      </Modal>
    </>
  );
};
