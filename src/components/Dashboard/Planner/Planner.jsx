import React from 'react'
import { PanelTask, PlannerColumn, PlannerRow, PlannerWrapper, TaskColor, TaskDescription } from './Dashboard.styles';
import DeleteButton from './DeleteButton';
import PlannerHeader from './PlannerHeader'
import TaskTime from './TaskTime';

const Planner = ({ tasks, setTasks }) => {
  const [filterWeekDay, setFilterWeekDay] = React.useState(null);

  const filterDaySelected = (enteredWeekDay) => {
    setFilterWeekDay(enteredWeekDay);
  };

  const onDeleteTask = (id) => {
    const filterId = id.split('_');
    const filterCards = [...tasks];
    const deletedCards = filterCards.findIndex((deleted) => {
      return deleted.id == filterId[0];
    });
    if(filterCards[deletedCards].conflictedTasks.length === 1){
      filterCards.splice(deletedCards, 1);
    } else{
      filterCards[deletedCards].conflictedTasks.splice(filterId[1], 1);
    }
    setTasks(filterCards);
  };

  return (
    <React.Fragment>
      <PlannerHeader onGetDay={filterDaySelected} />
      <PlannerWrapper>
        <PlannerColumn>
          <TaskTime time={'Time'} />
          {
            tasks && tasks.filter((selectedDay) => {
              return selectedDay.selectDay === filterWeekDay
            }).map((task) => {
              return <TaskTime key={task.id} day={task.selectDay} time={task.choosenTime} />
            })
          }
        </PlannerColumn>
        <PanelTask>
          <PlannerRow />
          {
            tasks && tasks.filter((selectedDay) => {
              return selectedDay.selectDay === filterWeekDay
            }).map((task) => {
              return (
                <PlannerRow>
                  {
                    task.conflictedTasks.map((cards, index) => (
                      <TaskDescription key={`${task.id}_${index}`}>
                        <TaskColor day={task.selectDay} />
                        <p>{cards}</p>
                        <DeleteButton onClick={() => onDeleteTask(`${task.id}_${index}`)} />
                      </TaskDescription>
                    ))
                  }
                </PlannerRow>
              );
            })
          }
        </PanelTask>
        {/* <PlannerColumn>
          <TaskTime time={'Time'} />
          {
            tasks && tasks.filter((selectedDay) => {
              return selectedDay.selectDay === filterWeekDay
            }).map((task) => {
              return <TaskTime key={task.id} day={task.selectDay} time={task.choosenTime} />
            })
          }
        </PlannerColumn>
        <PanelTask>
          <PlannerRow />
          {
            tasks && tasks.filter((selectedDay) => {
              return selectedDay.selectDay === filterWeekDay
            }).map((task) => {
              return (
                <>
              {
                task.conflictedTasks.map((card, index) => (
                  <TaskDescription key={`${task.id}_${index}`}>
                    <TaskColor day={task.selectDay} />
                    <p>
                      {card}
                    </p>
                    <DeleteButton onClick={() => onDeleteTask(`${task.id}_${index}`)} />
                  </TaskDescription>
                ))
              }
              </>
            )})
          }
        </PanelTask> */}
      </PlannerWrapper>
    </React.Fragment>
  )
}

export default Planner
