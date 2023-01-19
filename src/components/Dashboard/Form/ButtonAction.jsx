import React from 'react'
import { StyledAction } from './Form.styles'

const ButtonAction = ({ children, type, onClick }) => {
  return (
    <StyledAction type={type} onClick={onClick}>
      { children }
    </StyledAction>
  )
}

export default ButtonAction