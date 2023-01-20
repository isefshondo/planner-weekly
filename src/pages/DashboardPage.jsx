import React from 'react'
import { Background } from '../components/Dashboard/Planner/Dashboard.styles'
import FormTask from '../components/Dashboard/Form/FormTask'
import Header from '../components/Dashboard/Header/Header'
import Planner from '../components/Dashboard/Planner/Planner'

const DashboardPage = () => {
  const [assignments, setAssignments] = React.useState([]);

  const saveAssignments = (assignment) => {
    setAssignments((prevAssignment) => {
      return [assignment, ...prevAssignment];
    }); 
  };

  return (
    <Background>
      <Header />
      <main>
        <FormTask onAddAssignment={saveAssignments} />
        <Planner tasks={assignments} />
      </main>
    </Background>
  )
}

export default DashboardPage
