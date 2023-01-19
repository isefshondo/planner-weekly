import React from 'react'
import { StyledButton } from './Dashboard.styles'

const ButtonWeek = ({ children, day, buttonValue }) => {
  return (
    <StyledButton day={buttonValue} value={buttonValue}>
      { day }
    </StyledButton>
  )
}

export default ButtonWeek
