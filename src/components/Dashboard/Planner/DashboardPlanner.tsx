import React from "react";
import { PlannerWrapper } from "../../../assets/styles/Global.styles";
import { PlannerProps } from "../../../interfaces/Interfaces";
import Cards from "./Cards";
import HeaderDay from "./HeaderDay";
import TaskTime from "./TaskTime";

const DashboardPlanner = (props: PlannerProps) => {
  const [selectedDay, setSelectedDay] = React.useState<string>("MONDAY");

  const selectedDayFilter = (selectedWeekDay: string) => {
    setSelectedDay(selectedWeekDay);
    props.setSelectedDay(selectedWeekDay);
  };

  const onDeleteTask = (id: string) => {
    const deletedId = id.split("_");
    const cards = [...props.enteredTasks];
    const deleteCards = cards.findIndex((deleted) => {
      return deleted.id == deletedId[0];
    })

    if(cards[deleteCards].conflictedTasks.length === 1){
      cards.splice(deleteCards, 1);
    } else{
      cards[deleteCards].conflictedTasks.splice(Number(deletedId[1]), 1);
    }

    props.setEnteredTasks(cards);
  };

  return (
    <React.Fragment>
      <HeaderDay setSelectedDayFilter={selectedDayFilter} />
      <PlannerWrapper>
        {props.enteredTasks && props.enteredTasks.filter((cards) => {
          return cards.selectedDay === selectedDay
        }).map((task) => {
          return (
            <div style={{display: "flex", columnGap: "1.063rem"}}>
              <TaskTime
                key={task.id}
                belongDay={task.selectedDay}
                belongTime={task.choosenTime}
                hasConflict={false}
              />
              <div style={{display: "flex", columnGap: "1.063rem"}}>
                {task.conflictedTasks.map((items, index) => {
                  return (
                    <Cards
                      id={`${task.id}_${index}`}
                      selectedDay={task.selectedDay}
                      description={items}
                      hasConflict={false}
                      onClick={() => onDeleteTask(`${task.id}_${index}`)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </PlannerWrapper>
    </React.Fragment>
  );
};

export default DashboardPlanner;