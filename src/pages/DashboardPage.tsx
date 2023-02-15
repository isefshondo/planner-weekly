import axios from "axios";
import React from "react";
import { Wrapper } from "../assets/styles/Global.styles";
import authHeader from "../auth/auth-header";
import PlannerForm from "../components/Dashboard/Form/PlannerForm";
import Header from "../components/Dashboard/Header/Header";
import DashboardPlanner from "../components/Dashboard/Planner/DashboardPlanner";
import { Assignments } from "../interfaces/Dashboard";

const DashboardPage: React.FC = () => {
  const url: string = "https://latam-challenge-2.deta.dev/api/v1";
  const [selectedDay, setSelectedDay] = React.useState<string>("");
  const [assignments, setAssignments] = React.useState<Array<Assignments>>([]);

  function getEnteredEvents() {
    const response = axios.get(`${url}/events/`, {
      headers: authHeader(),
    }).then((data) => {
      console.log(data);
    }).catch(err => console.log(err));
  }

  React.useEffect(() => {
    getEnteredEvents()
  }, []);
  
  /*const addAssignments = (tasks: Assignments) => {
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
  };*/

  return (
    <Wrapper isPlanner={true}>
      <Header />
      <main>
        <PlannerForm
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