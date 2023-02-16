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

  function addAssignments(tasks: Array<Assignments>) {
    const isTaskConflicting = [...assignments].findIndex(task => {
      tasks.map((events) => {
        return (
          task.dayOfWeek === events.dayOfWeek &&
          task.createdAt === events.createdAt
        )
      })
      // console.log(task.dayOfWeek, tasks.dayOfWeek, task.createdAt, tasks.createdAt)
    });
    // const isTaskConflicting = tasks.map(events => {
    //   tasks.findIndex((task) => {
    //     return (
    //       task.dayOfWeek === events.dayOfWeek &&
    //       task.createdAt === events.createdAt
    //     )
    //   })
    // });
    console.log(isTaskConflicting);
    // const organizedAssignments: Array<Assignments> = [...tasks];

    // .findIndex((task) => {
    //   return (
    //     task.dayOfWeek === tasks.dayOfWeek &&
    //     task.createdAt === tasks.createdAt
    //   );
    // });

    // const organizedAssignments: Array<Assignments> = [...assignments];

    // if (isTaskConflicting >= 0) {
    //   organizedAssignments[isTaskConflicting].conflictedTasks.push(tasks);
    // } else {
    //   organizedAssignments.push({
    //     ...tasks,
    //   });
    // }

    // setAssignments(
    //   organizedAssignments.sort((a, b) =>
    //     a.createdAt.localeCompare(b.createdAt)
    //   )
    // )
  }

  function getEnteredEvents() {
    const response = axios.get(`${url}/events/`, {
      headers: authHeader(),
    }).then((data) => {
      const enteredTasksData = data.data.events.map((enteredTasks: Assignments) => {
        const enteredTime = new Date(enteredTasks.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        return {
          ...enteredTasks,
          createdAt: enteredTime,
        };
      });
      setAssignments(enteredTasksData);
      addAssignments(enteredTasksData);
    }).catch(err => console.log(err));
  }

  React.useEffect(() => {
    getEnteredEvents()
  }, []);
  
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