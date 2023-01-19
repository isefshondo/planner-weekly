import React from 'react'
import { StyledInput } from './Form.styles'

const Input = ({ reference, type, placeholder }) => {
  return (
    <React.Fragment>
      <StyledInput ref={reference} type={type} placeholder={placeholder} />
    </React.Fragment>
  )
}

export default Input
