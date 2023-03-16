import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MemeModal = ({
  detailedMeme,
  isDetailedModalOpen,
  setIsDetailedModalOpen,
}) => {
  const handleClose = () => {
    setIsDetailedModalOpen(false);
  };

  return (
    <>
      <Modal
        show={isDetailedModalOpen}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="d-flex flex-row justify-content-center">
          <img src={detailedMeme.url} alt={detailedMeme.name} width="90%" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MemeModal;
