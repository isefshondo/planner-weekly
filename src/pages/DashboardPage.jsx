import React from 'react'
import AddTask from '../components/Dashboard/AddTask'
import Header from '../components/UI/Header'

const DashboardPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <AddTask />
      </main>
    </React.Fragment>
  )
}

export default DashboardPage
