import { motion } from "framer-motion";
import Modal from "react-modal";
import styled from "styled-components";
import { AddCard } from "../AddCard";

interface CardModalAddProps {
  IsOpenAdd: boolean;
  setIsOpenAdd: () => void;
}

const MotionContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
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
        // overlayClassName="react-modal-overlay-add"
        className="react-modal-content-add"
      >
        <MotionContainer
          initial={{ x: 2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
          }}
        >
          <div className="react-modal-overlay-add">
            <AddCard />
          </div>
        </MotionContainer>
      </Modal>
    </>
  );
};
