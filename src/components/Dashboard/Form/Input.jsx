import React from 'react'
import { StyledInput } from './Form.styles'

const Input = ({ type, placeholder }) => {
  return (
    <React.Fragment>
      <StyledInput type={type} placeholder={placeholder} />
    </React.Fragment>
  )
}

export default Input
