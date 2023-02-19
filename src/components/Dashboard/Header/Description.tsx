import React from "react";
import { DescriptionWrapper } from "./styles";
import { DescriptionProps } from "../../../interfaces/dashboard-interfaces";

const Description = (props: DescriptionProps) => {
  return (
    <DescriptionWrapper>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </DescriptionWrapper>
  );
};

export default Description;