import axios from "axios";
import React from "react";
import { CardsWrapper, PlannerWrapper } from "./styles";
import authHeader from "../../../auth/auth-header";
import { ActionProps } from "../../../interfaces/dashboard-interfaces";
import Cards from "./Cards";
import HeaderDay from "./HeaderDay";
import TaskTime from "./TaskTime";

const DashboardPlanner = (props: ActionProps) => {
  const url: string = "https://latam-challenge-2.deta.dev/api/v1";
  const [selectedDay, setSelectedDay] = React.useState<string>("MONDAY");

  const selectedDayFilter = (selectedWeekDay: string) => {
    setSelectedDay(selectedWeekDay);
    props.setSelectedDay(selectedWeekDay);
  };

  const onDeleteTask = (id: string) => {
    const response = axios.delete(`${url}/events/${id}`, {
      headers: authHeader(),
    }).then(data => {
      if(data.status === 204) {
        props.refetchEvents();
      }
    }).catch(err => {
      if(err.response.data.errors && err.response.data.errors !== null) {
        const errorsMessages: Array<string> = err.response.data.errors;
        errorsMessages.map(messages => alert(messages));
      } else {
        alert(err.response.data.message);
      }
    })
  };

  return (
    <React.Fragment>
      <HeaderDay
        choosenDay={selectedDay}
        setSelectedDayFilter={selectedDayFilter}
      />
      <PlannerWrapper>
        <TaskTime
          key="TimeColumn"
          belongDay="Everyday"
          belongTime="Time"
          hasConflict={false}
        />
        {props.enteredTasks && 
          props.enteredTasks
            .map((task) => {
              const currentTime = new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              });
              const currentDate = new Date().toLocaleDateString();
              const hasConflict = (task.createdAtDate < currentDate) || (task.createdAt < currentTime) || task.conflictedTasks.length > 1;
              return (
                <div style={{ display: "flex", columnGap: "1.063rem" }}>
                  <TaskTime
                    key={`${task._id}-TIME`}
                    belongDay={task.dayOfWeek}
                    belongTime={task.createdAt}
                    hasConflict={hasConflict}
                  />
                  <CardsWrapper hasConflict={hasConflict}>
                  {task.conflictedTasks.map((items) => {
                      return (
                        <Cards
                          id={items.id}
                          selectedDay={task.dayOfWeek}
                          description={items.description}
                          hasConflict={hasConflict}
                          onClick={() => onDeleteTask(items.id)}
                        />
                      );
                    })}
                  </CardsWrapper>
                </div>
              );
            })}
      </PlannerWrapper>
    </React.Fragment>
  );
};

export default DashboardPlanner;