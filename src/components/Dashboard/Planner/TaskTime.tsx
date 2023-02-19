import React from "react";
import { StyledTaskTime } from "./styles";
import { TimeProps } from "../../../interfaces/dashboard-interfaces";

const TaskTime = (props: TimeProps) => {
  return (
    <StyledTaskTime
      belongDay={props.belongDay}
      belongTime={props.belongTime}
      hasConflict={props.hasConflict}
    >
      {props.belongTime}
    </StyledTaskTime>
  );
};

export default TaskTime;