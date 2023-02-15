import React from "react";
import { CardsWrapper, PlannerWrapper } from "../../../assets/styles/Global.styles";
import { ActionProps } from "../../../interfaces/Dashboard";
import Cards from "./Cards";
import HeaderDay from "./HeaderDay";
import TaskTime from "./TaskTime";

const DashboardPlanner = (props: ActionProps) => {
  const [selectedDay, setSelectedDay] = React.useState<string>("MONDAY");

  console.log(props.enteredTasks);

  const selectedDayFilter = (selectedWeekDay: string) => {
    setSelectedDay(selectedWeekDay);
    props.setSelectedDay(selectedWeekDay);
  };

  const onDeleteTask = (id: string) => {
    const deletedId = id.split("_");
    const cards = [...props.enteredTasks];
    const deleteCards = cards.findIndex((deleted) => {
      return deleted._id == deletedId[0];
    });

    if (cards[deleteCards].conflictedTasks.length === 1) {
      cards.splice(deleteCards, 1);
    } else {
      cards[deleteCards].conflictedTasks.splice(Number(deletedId[1]), 1);
    }

    props.setEnteredTasks(cards);
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
            .filter((cards) => {
              return cards.dayOfWeek === selectedDay.toLocaleLowerCase();
            })
            .map((task) => {
              // const hasConflict = task.conflictedTasks.length > 1;
              return (
                <div style={{ display: "flex", columnGap: "1.063rem" }}>
                  <TaskTime
                    key={`${task._id}-TIME`}
                    belongDay={task.dayOfWeek}
                    belongTime={task.choosenTime}
                    hasConflict={false}
                  />
                  <CardsWrapper hasConflict={false}>
                    <Cards
                      id={task._id}
                      key={task._id}
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