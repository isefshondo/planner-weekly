import React from "react";
import { ModalProps } from "../../interfaces/Interfaces";
import { Box, Overlay } from "./styles";
import CloseIcon from "../../assets/imgs/close.png";

const Modal = (props: ModalProps) => {
  const [closeModal, setCloseModal] = React.useState<boolean>(false);
  return (
    <Overlay onClick={() => setCloseModal(true)} closeModal={closeModal}>
      <Box>
        <figure onClick={() => setCloseModal(true)}>
          <img src={CloseIcon} alt="Close Modal" />
        </figure>
        <hgroup>
          <h1>{props.errorMessage}</h1>
        </hgroup>
      </Box>
    </Overlay>
  );
};

export default Modal;