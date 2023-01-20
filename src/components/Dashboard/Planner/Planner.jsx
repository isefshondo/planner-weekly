import React from 'react'
import { PlannerRow, PlannerWrapper, TaskColor, TaskDescription } from './Dashboard.styles';
import DeleteButton from './DeleteButton';
import PlannerHeader from './PlannerHeader'
import TaskTime from './TaskTime';

const Planner = ({ cards }) => {
  const [getDay, setGetDay] = React.useState('');
  
  const onGetDayHandler = (choosenDay) => {
    setGetDay(choosenDay);
  };

  return (
    <PlannerWrapper>
      <PlannerHeader onGetDay={onGetDayHandler} />
      <PlannerRow>
        <TaskTime time={'Time'} />
      </PlannerRow>
      {
        cards && cards.map((task) => {
          return <PlannerRow>
          <TaskTime day={task.day} time={task.time} />
          <TaskDescription>
            <TaskColor day={task.day} />
             <p>{task.title}</p>
            <DeleteButton />
          </TaskDescription>
        </PlannerRow>
        })
      }
    </PlannerWrapper>
  )
}

export default Planner
