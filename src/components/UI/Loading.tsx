import React from "react";
import { StyledLoader, StyledModal, StyledOverlay } from "./styles";

const Loading = () => {
  return (
    <StyledModal>
      <StyledOverlay />
      <StyledLoader>
        <span></span>
        <span></span>
        <span></span>
      </StyledLoader>
    </StyledModal>
  );
};

export default Loading;