import axios from "axios";
import React from "react";
import { CardsWrapper, PlannerWrapper, StyledLoadModal, TasksWrapper, TimeWrapper } from "./styles";
import authHeader from "../../../auth/auth-header";
import { ActionProps } from "../../../interfaces/dashboard-interfaces";
import Cards from "./Cards";
import HeaderDay from "./HeaderDay";
import TaskTime from "./TaskTime";
import TasksLoader from "./TasksLoader";

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

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <React.Fragment>
      <HeaderDay
        choosenDay={selectedDay}
        setSelectedDayFilter={selectedDayFilter}
      />
      <PlannerWrapper>
        <TimeWrapper>
          <TaskTime
            key="TimeColumn"
            belongDay="Everyday"
            belongTime="Time"
            hasConflict={false}
          />
          {props.enteredTasks &&
            props.enteredTasks.map((time) => {
              const hasConflict =
                time.createdAtDate < currentDate ||
                time.createdAt < currentTime ||
                time.conflictedTasks.length > 1;
              return (
                <TaskTime
                  key={`${time._id}-TIME`}
                  belongDay={time.dayOfWeek}
                  belongTime={time.createdAt}
                  hasConflict={hasConflict}
                />
              );
            })}
        </TimeWrapper>
        <TasksWrapper>
          <div style={{ width: "100vw", height: "75px" }} />
          {!props.isLoading && props.enteredTasks.length === 0 && (
            <StyledLoadModal isTaskNotFound={true}>
              <h1>No tasks were found!</h1>
            </StyledLoadModal>
          )}
          {props.enteredTasks &&
            props.enteredTasks.map((task) => {
              const hasConflict =
                task.createdAtDate < currentDate ||
                task.createdAt < currentTime ||
                task.conflictedTasks.length > 1;
              return (
                <CardsWrapper
                  key={`${task._id}-WRAPPER`}
                  hasConflict={hasConflict}
                >
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
              );
            })}
          {props.isLoading && <TasksLoader />}
        </TasksWrapper>
      </PlannerWrapper>
    </React.Fragment>
  );
};

export default DashboardPlanner;