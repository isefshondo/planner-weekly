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
        id: prevAssignment.length + 1,
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
