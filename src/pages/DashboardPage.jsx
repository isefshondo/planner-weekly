import React from 'react'
import { Background, StyledMain } from '../components/Dashboard/Planner/Dashboard.styles'
import FormTask from '../components/Dashboard/Form/FormTask'
import Header from '../components/Dashboard/Header/Header'
import Planner from '../components/Dashboard/Planner/Planner'

const DashboardPage = () => {
  const [selectedWeekDay, setSelectedWeekDay] = React.useState(null);
  const [assignments, setAssignments] = React.useState([]);

  const saveAssignments = (assignment) => {
    const isTaskConflicting = [...assignments].findIndex((task) => {
      return task.selectDay === assignment.selectDay && task.choosenTime === assignment.choosenTime;
    });

    const filteredAssignment = [...assignments];
    
    if(isTaskConflicting >= 0){
      filteredAssignment[isTaskConflicting].conflictedTasks.push(assignment.description);
    } else{
      filteredAssignment.push({
        id: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),
        ...assignment
      })
    }

    setAssignments(filteredAssignment);
  };

  return (
    <Background>
      <Header />
      <StyledMain>
        <FormTask onAddAssignment={saveAssignments} tasks={assignments} setTasks={setAssignments} getWeekDay={selectedWeekDay} />
        <Planner tasks={assignments} setTasks={setAssignments} setWeekDay={setSelectedWeekDay} />
      </StyledMain>
    </Background>
  )
}

export default DashboardPage
