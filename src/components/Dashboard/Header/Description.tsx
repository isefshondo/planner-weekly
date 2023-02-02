import React from "react";
import { DescriptionWrapper } from "../../../assets/styles/Global.styles";

type DescriptionProps = {
  title: string,
  message: string
};

const Description = (props: DescriptionProps) => {
  return (
    <DescriptionWrapper>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </DescriptionWrapper>
  );
};

export default Description;