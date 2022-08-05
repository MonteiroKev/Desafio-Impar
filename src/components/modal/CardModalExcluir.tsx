import Modal from "react-modal";
import { ExcluirCard } from "../ExcluirCard";

interface CardModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const CardModalExcluir = ({ isOpen, setIsOpen }: CardModalProps) => {
  Modal.setAppElement("body");

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={setIsOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        contentLabel="Example Modal"
      >
        <ExcluirCard />
      </Modal>
    </>
  );
};
