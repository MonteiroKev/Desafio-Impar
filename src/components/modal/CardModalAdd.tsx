import { motion } from "framer-motion";
import Modal from "react-modal";
import styled from "styled-components";
import { AddCard } from "../../pages/Home/AddCard";

interface CardModalAddProps {
  IsOpenAdd: boolean;
  setIsOpenAdd: () => void;
}

const MotionContainer = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
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
          exit={{ x: -4000, opacity: 0.5 }}
          transition={{
            duration: 0.6,
            ease: "easeIn",
          }}
        >
          <AddCard />
        </MotionContainer>
      </Modal>
    </>
  );
};
