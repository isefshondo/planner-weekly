import React from "react";
import { Card, DeleteCardButton, StyledDivTask } from "../../../assets/styles/Global.styles";
import { CardsProps } from "../../../interfaces/Interfaces";

const Cards = (props: CardsProps) => {
  return (
    <Card key={props.id}>
      <StyledDivTask
        hasConflict={props.hasConflict}
        selectedDay={props.selectedDay}
      />
      <p>{props.description}</p>
      <DeleteCardButton onClick={props.onClick}>Delete</DeleteCardButton>
    </Card>
  );
};

export default Cards;