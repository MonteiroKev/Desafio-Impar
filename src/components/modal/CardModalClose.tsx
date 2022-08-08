import Modal from "react-modal";
import { ExcludeCard } from "../../pages/Home/ExcludeCard";

interface CardModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const CardModalClose = ({ isOpen, setIsOpen }: CardModalProps) => {
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
        <ExcludeCard setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};
