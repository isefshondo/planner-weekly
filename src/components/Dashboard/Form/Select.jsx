import React from 'react'
import { StyledSelect } from './Form.styles'

const Select = () => {
  return (
    <React.Fragment>
      <StyledSelect id="week">
        <option value="monday" defaultValue>Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="satuday">Saturday</option>
        <option value="sunday">Sunday</option>
      </StyledSelect>
    </React.Fragment>
  )
}

export default Select
