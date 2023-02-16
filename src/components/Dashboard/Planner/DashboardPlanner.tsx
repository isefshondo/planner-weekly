import axios from "axios";
import React from "react";
import { CardsWrapper, PlannerWrapper } from "../../../assets/styles/Global.styles";
import authHeader from "../../../auth/auth-header";
import { ActionProps } from "../../../interfaces/Dashboard";
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
        props.getEnteredEvents();
      }
    }).catch(err => {
      if(typeof err.response.data === "object") {
        alert(err.response.data.errors[0]);
      } else {
        alert(err.response.data);
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
              return (
                <div style={{ display: "flex", columnGap: "1.063rem" }}>
                  <TaskTime
                    key={`${task._id}-TIME`}
                    belongDay={task.dayOfWeek}
                    belongTime={task.createdAt}
                    hasConflict={false}
                  />
                  <CardsWrapper hasConflict={false}>
                    <Cards
                      id={task._id}
                      selectedDay={task.dayOfWeek}
                      description={task.description}
                      hasConflict={false}
                      onClick={() => onDeleteTask(task._id)}
                    />
                    {/* {task.conflictedTasks.map((items, index) => {
                      return (
                        <Cards
                          id={`${task._id}_${index}`}
                          selectedDay={task.dayOfWeek}
                          description={items}
                          hasConflict={hasConflict}
                          onClick={() => onDeleteTask(`${task._id}_${index}`)}
                        />
                      );
                    })} */}
                  </CardsWrapper>
                </div>
              );
            })}
      </PlannerWrapper>
    </React.Fragment>
  );
};

export default DashboardPlanner;