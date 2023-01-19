import React from 'react'
import { StyledSelect } from './Form.styles'

const Select = ({ reference }) => {
  return (
    <React.Fragment>
      <StyledSelect ref={reference} name="days" id="days">
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
