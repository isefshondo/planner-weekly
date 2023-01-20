import React from 'react'
import { PlannerRow, PlannerWrapper, TaskColor, TaskDescription } from './Dashboard.styles';
import DeleteButton from './DeleteButton';
import PlannerHeader from './PlannerHeader'
import TaskTime from './TaskTime';

const Planner = ({ tasks }) => {
  const [filterWeekDay, setFilterWeekDay] = React.useState(null);

  const filterDaySelected = (enteredWeekDay) => {
    setFilterWeekDay(enteredWeekDay);
  };

  return (
    <PlannerWrapper>
      <PlannerHeader onGetDay={filterDaySelected} />
      <PlannerRow>
        <TaskTime time={'Time'} />
      </PlannerRow>
      {
        tasks && tasks.filter((selectedDay) => {
          return selectedDay.selectDay === filterWeekDay
        }).map((task) => {
          return <PlannerRow key={task.id}>
            <TaskTime day={task.selectDay} time={task.choosenTime} />
            <TaskDescription>
              <TaskColor day={task.selectDay} />
              <p>
                {task.description}
              </p>
              <DeleteButton />
            </TaskDescription>
          </PlannerRow>
        })
      }
    </PlannerWrapper>
  )
}

export default Planner
