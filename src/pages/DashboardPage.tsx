import axios from "axios";
import React from "react";
import { Wrapper } from "../assets/styles/Global.styles";
import authHeader from "../auth/auth-header";
import PlannerForm from "../components/Dashboard/Form/PlannerForm";
import Header from "../components/Dashboard/Header/Header";
import DashboardPlanner from "../components/Dashboard/Planner/DashboardPlanner";
import { Assignments, TasksProps } from "../interfaces/dashboard-interfaces";

let enteredTask: Array<Assignments> = [];

const DashboardPage: React.FC = () => {
  const url: string = "https://latam-challenge-2.deta.dev/api/v1";
  const [selectedDay, setSelectedDay] = React.useState<string>("MONDAY");
  const [assignments, setAssignments] = React.useState<Array<Assignments>>([]);

  function refetchEventsTask() {
    enteredTask = [];
    setAssignments([]);
    getEnteredEvents(selectedDay.toLocaleLowerCase());
  }

  function addAssignments(tasks: TasksProps) {
    const isTaskConflicting = enteredTask.findIndex((task) => {
      return (
        task.dayOfWeek === tasks.dayOfWeek && task.createdAt === tasks.createdAtTime
      );
    });

    if(isTaskConflicting >= 0) {
      enteredTask[isTaskConflicting].conflictedTasks.push({
        id: tasks.id,
        description: tasks.description,
      });
    } else {
      enteredTask.push({
        _id: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
        dayOfWeek: tasks.dayOfWeek,
        createdAt: tasks.createdAtTime,
        description: tasks.description,
        createdAtDate: tasks.createdAtDate,
        conflictedTasks: [
          {
            id: tasks.id,
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
      data.data.events.map((enteredTasks: Assignments) => {
        const enteredTime = new Date(enteredTasks.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        
        const enteredDate = new Date(
          enteredTasks.createdAt
        ).toLocaleDateString();

        addAssignments({
          id: enteredTasks._id,
          description: enteredTasks.description,
          dayOfWeek: enteredTasks.dayOfWeek,
          createdAtTime: enteredTime,
          createdAtDate: enteredDate,
          conflictingTasks: [],
        })
      });
    }).catch(err => {
      if(err.response.data.errors && err.response.data.errors !== null) {
        const errorsMessages: Array<string> = err.response.data.errors;
        errorsMessages.map(messages => alert(messages));
      } else {
        alert(err.response.data.message);
      }
    });
  }

  React.useEffect(() => {
    refetchEventsTask();
  }, [selectedDay]);
  
  return (
    <Wrapper isPlanner={true}>
      <Header />
      <main>
        <PlannerForm
          enteredTasks={assignments}
          setEnteredTasks={setAssignments}
          selectedDay={selectedDay}
          refetchEvents={() => refetchEventsTask()}
        />
        <DashboardPlanner
          enteredTasks={assignments}
          setEnteredTasks={setAssignments}
          setSelectedDay={setSelectedDay}
          refetchEvents={() => refetchEventsTask()}
        />
      </main>
    </Wrapper>
  );
};

export default DashboardPage;