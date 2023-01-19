import React from 'react'
import { Background } from '../components/Dashboard/Planner/Dashboard.styles'
import FormTask from '../components/Dashboard/Form/FormTask'
import Header from '../components/Dashboard/Header/Header'
import Planner from '../components/Dashboard/Planner/Planner'

const DashboardPage = () => {
  return (
    <Background>
      <Header />
      <main>
        <FormTask />
        <Planner />
      </main>
    </Background>
  )
}

export default DashboardPage
