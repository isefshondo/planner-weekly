import React from 'react'
import Clock from './Clock'
import Description from './Description'
import Weather from './Weather'

const Header = () => {
  return (
    <header>
      <Description 
        title={"Weekly Planner"} 
        description={"Use this planner to organize your daily issues"} 
      />
      <Clock />
      <Weather />
    </header>
  )
}

export default Header
