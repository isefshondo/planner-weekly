import React from 'react'
import { Background } from '../components/Dashboard/Planner/Dashboard.styles'
import FormTask from '../components/Dashboard/Form/FormTask'
import Header from '../components/Dashboard/Header/Header'
import Planner from '../components/Dashboard/Planner/Planner'

const DashboardPage = () => {
  const [tasks, setTasks] = React.useState([]);

  const addNewTask = (newTask) => {
    setTasks((prevTasks) => {
      return [newTask, ...prevTasks];
    });
  };

  return (
    <Background>
      <Header />
      <main>
        <FormTask onAddNewTask={addNewTask} />
        <Planner cards={tasks} />
      </main>
    </Background>
  )
}

export default DashboardPage
