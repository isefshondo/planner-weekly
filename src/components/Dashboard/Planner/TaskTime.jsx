import React from 'react'
import { StyledTime } from './Dashboard.styles'

const TaskTime = ({ day, time }) => {
  return (
    <StyledTime day={day}>
      { time }
    </StyledTime>
  )
}

export default TaskTime
