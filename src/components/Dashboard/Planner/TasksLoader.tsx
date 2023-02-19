import React from "react";
import { StyledLoadModal } from "./styles";

const TasksLoader = () => {
  return (
    <StyledLoadModal isTaskNotFound={false}>
      <h1>Loading content...</h1>
    </StyledLoadModal>
  );
};

export default TasksLoader;