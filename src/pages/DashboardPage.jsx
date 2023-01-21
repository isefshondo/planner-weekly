import React from 'react'
import { Background, StyledMain } from '../components/Dashboard/Planner/Dashboard.styles'
import FormTask from '../components/Dashboard/Form/FormTask'
import Header from '../components/Dashboard/Header/Header'
import Planner from '../components/Dashboard/Planner/Planner'

const DashboardPage = () => {
  const [assignments, setAssignments] = React.useState([]);

  const saveAssignments = (assignment) => {
    setAssignments((prevAssignment) => {
      assignment = {
        id: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),
        ...assignment
      };
      return [assignment, ...prevAssignment];
    });
  };

  return (
    <Background>
      <Header />
      <StyledMain>
        <FormTask onAddAssignment={saveAssignments} />
        <Planner tasks={assignments} setTasks={setAssignments} />
      </StyledMain>
    </Background>
  )
}

export default DashboardPage
