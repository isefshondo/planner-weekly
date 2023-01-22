import React from 'react'
import { StyledTime } from './Dashboard.styles'

const TaskTime = ({ day, time, hasConflict }) => {
  return (
    <StyledTime day={day} hasConflict={hasConflict}>
      { time }
    </StyledTime>
  )
}

export default TaskTime
