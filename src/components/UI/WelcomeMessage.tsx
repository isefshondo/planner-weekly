import React from "react";
import { StyledMessage } from "./styles";

const WelcomeMessage = ({ message }: { message: string }) => {
  return (
    <StyledMessage>
      <h1>Welcome,</h1>
      <p>{message}</p>
    </StyledMessage>
  );
};

export default WelcomeMessage;