import React from 'react'
import { StyledFormTask } from './Form.styles'
import Input from './Input'
import Select from './Select'

const FormTask = () => {
  return (
    <StyledFormTask>
      <Input type={'text'} placeholder={'Task or issue'} />
      <Select />
    </StyledFormTask>
  )
}

export default FormTask
