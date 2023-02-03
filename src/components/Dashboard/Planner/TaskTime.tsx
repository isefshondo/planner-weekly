import React from "react";
import { StyledTaskTime } from "../../../assets/styles/Global.styles";
import { TaskTimeProps } from "../../../interfaces/Interfaces";

const TaskTime = (props: TaskTimeProps) => {
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