import React from 'react'
import Clock from './Clock'
import Description from './Description'
import { StyledHeader } from './Header.styles'
import Logout from './Logout'
import Weather from './Weather'

const Header = () => {
  return (
    <StyledHeader>
      <Description 
        title={"Weekly Planner"} 
        description={"Use this planner to organize your daily issues"} 
      />
      <Clock />
      <Weather />
      <Logout />
    </StyledHeader>
  )
}

export default Header
