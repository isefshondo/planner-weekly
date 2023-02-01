import React from "react";

type DescriptionProps = {
  title: string,
  message: string
};

const Description = (props: DescriptionProps) => {
  return (
    <hgroup>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </hgroup>
  );
};

export default Description;