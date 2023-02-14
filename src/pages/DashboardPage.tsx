import React from "react";
import { Wrapper } from "../assets/styles/Global.styles";
import PlannerForm from "../components/Dashboard/Form/PlannerForm";
import Header from "../components/Dashboard/Header/Header";
import DashboardPlanner from "../components/Dashboard/Planner/DashboardPlanner";
import { Assignments } from "../interfaces/Dashboard";

const DashboardPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = React.useState<string>("");
  const [assignments, setAssignments] = React.useState<Array<Assignments>>([]);

  /*
  // I don't know if I can use useEffect anymore
  React.useEffect(() => {
    function getEnteredEvents(description: string, dayOfWeek: string) {
      const response = axios.get(`${url}/events?dayOfWeek=${dayOfWeek}&description=${description}/`, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        }
      }).then((data) => {
        console.log(data);
        // setAssignments(data);
      })
    }
  }, [assignments]);
  */

  const addAssignments = (tasks: Assignments) => {
    const isTaskConflicting = [...assignments].findIndex((task) => {
      return (
        task.selectedDay === tasks.selectedDay &&
        task.choosenTime === tasks.choosenTime
      );
    });

    const organizedAssignments: Array<Assignments> = [...assignments];

    if (isTaskConflicting >= 0) {
      organizedAssignments[isTaskConflicting].conflictedTasks.push(tasks.title);
    } else {
      organizedAssignments.push({
        ...tasks,
      });
    }

    setAssignments(
      organizedAssignments.sort((a, b) =>
        a.choosenTime.localeCompare(b.choosenTime)
      )
    );
  };

  return (
    <Wrapper isPlanner={true}>
      <Header />
      <main>
        <PlannerForm
          addNewTask={addAssignments}
          // addNewTask={getEnteredEvents}
          enteredTasks={assignments}
          setEnteredTasks={setAssignments}
          selectedDay={selectedDay}
        />
        <DashboardPlanner
          enteredTasks={assignments}
          setEnteredTasks={setAssignments}
          setSelectedDay={setSelectedDay}
        />
      </main>
    </Wrapper>
  );
};

export default DashboardPage;