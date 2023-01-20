import React from 'react'
import { StyledButton, WeekRow } from './Dashboard.styles'

const PlannerHeader = ({ onGetDay }) => {
  const days = [
    {id: 'monday', day: 'Monday', value: 'monday'},
    {id: 'tuesday', day: 'Tuesday', value: 'tuesday'},
    {id: 'wednesday', day: 'Wednesday', value: 'wednesday'},
    {id: 'thursday', day: 'Thursday', value: 'thursday'},
    {id: 'friday', day: 'Friday', value: 'friday'},
    {id: 'saturday', day: 'Saturday', value: 'saturday'},
    {id: 'sunday', day: 'Sunday', value: 'sunday'},
  ];

  const onGetWeekDay = (e) => {
    onGetDay(e.target.value);
  };

  return (
    <WeekRow>
      {
        days.map((day) => {
          return (
            <StyledButton 
              key={day.id} 
              day={day.value} 
              value={day.value}
              onClick={onGetWeekDay}
            >
              {day.day}
            </StyledButton>
          )
        })
      }
    </WeekRow>
  )
}

export default PlannerHeader
