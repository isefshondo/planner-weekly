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
  const [selectedDay, setSelectedDay] = React.useState<string>("MONDAY");
  const [assignments, setAssignments] = React.useState<Array<Assignments>>([]);

  let enteredTask: Array<Assignments> = [];

  function resetTasksEvents() {
    enteredTask = [];
    setAssignments([]);
  }

  function addAssignments(tasks: Assignments) {
    const isTaskConflicting = enteredTask.findIndex((task) => {
      return (
        task.dayOfWeek === tasks.dayOfWeek && task.createdAt === tasks.createdAt
      );
    });

    if(isTaskConflicting >= 0) {
      enteredTask[isTaskConflicting].conflictedTasks.push({
        id: tasks._id,
        description: tasks.description,
      });
    } else {
      enteredTask.push({
        _id: tasks._id,
        dayOfWeek: tasks.dayOfWeek,
        createdAt: tasks.createdAt,
        description: tasks.description,
        date: tasks.date,
        conflictedTasks: [
          {
            id: tasks._id,
            description: tasks.description,
          },
        ],
      });
    }

    setAssignments(enteredTask);
  }

  function getEnteredEvents(day: string) {
    const response = axios.get(`${url}/events?dayOfWeek=${day}`, {
      headers: authHeader(),
    }).then((data) => {
      const enteredTasksData: Array<Assignments> = data.data.events.map((enteredTasks: Assignments) => {
        const enteredTime = new Date(enteredTasks.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        const enteredDate = new Date(
          enteredTasks.createdAt
        ).toLocaleDateString();

        return {
          ...enteredTasks,
          createdAt: enteredTime,
          date: enteredDate,
        }
      });
      enteredTasksData.forEach(item => {
        addAssignments(item);
      })
    }).catch(err => {
      console.log(err);
      typeof err.response.data === "object"
        ? alert(err.response.data)
        : alert(err.response.data);
    });
  }

  React.useEffect(() => {
    getEnteredEvents(selectedDay.toLocaleLowerCase());
    resetTasksEvents();
  }, [selectedDay]);
  
  return (
    <Wrapper isPlanner={true}>
      <Header />
      <main>
        <PlannerForm
          enteredTasks={assignments}
          setEnteredTasks={setAssignments}
          selectedDay={selectedDay}
          getEnteredEvents={() => getEnteredEvents(selectedDay.toLocaleLowerCase())}
        />
        <DashboardPlanner
          enteredTasks={assignments}
          setEnteredTasks={setAssignments}
          setSelectedDay={setSelectedDay}
          getEnteredEvents={() => getEnteredEvents(selectedDay.toLocaleLowerCase())}
        />
      </main>
    </Wrapper>
  );
};

export default DashboardPage;