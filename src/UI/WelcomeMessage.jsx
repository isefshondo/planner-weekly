import React from 'react'
import { StyledWelcome } from '../Global.styles'

const WelcomeMessage = ({ message }) => {
  return (
    <StyledWelcome>
      <h1>Welcome,</h1>
      <p>{ message }</p>
    </StyledWelcome>
  )
}

export default WelcomeMessage
