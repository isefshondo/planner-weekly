import React from 'react'
import { PlannerRow, PlannerWrapper } from './Dashboard.styles';
import PlannerHeader from './PlannerHeader'
import TaskTime from './TaskTime';

const Planner = ({ cards }) => {
  const [getDay, setGetDay] = React.useState(null);
  console.log(cards);

  const getDayHandler = (choosenDay) => {};

  return (
    <PlannerWrapper>
      <PlannerHeader onGetDay={getDayHandler} />
      // Gerar por map a partir daqui
      <PlannerRow>
        <TaskTime day={'monday'} time={'Time'} />
      
      </PlannerRow>
    </PlannerWrapper>
  )
}

export default Planner
