import React from "react";
import { Wrapper } from "../assets/styles/Global.styles";
import PlannerForm from "../components/Dashboard/Form/PlannerForm";
import Header from "../components/Dashboard/Header/Header";
import { Assignments } from "../interfaces/Interfaces";

const DashboardPage = () => {
  const [selectedDay, setSelectedDay] = React.useState<string>("");
  const [assignments, setAssignments] = React.useState<Array<Assignments>>([]);

  const addAssignments = (tasks: Assignments) => {
    const isTaskConflicting = [...assignments].findIndex((task) => {
      return task.selectedDay === tasks.selectedDay && task.choosenTime === tasks.choosenTime;
    });

    const organizedAssignments = [...assignments];

    if(isTaskConflicting >= 0){
      organizedAssignments[isTaskConflicting].conflictedTasks.push(tasks.title);
    } else{
      organizedAssignments.push({
        ...tasks
      })
    }

    setAssignments(organizedAssignments.sort((a, b) => a.choosenTime.localeCompare(b.choosenTime)));
  };

  return (
    <React.Fragment>
      <Header />
      <Wrapper isPlanner={true}>
        <PlannerForm addNewTask={addAssignments} />
      </Wrapper>
    </React.Fragment>
  );
};

export default DashboardPage;