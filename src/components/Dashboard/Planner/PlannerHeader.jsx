import React from 'react'
import { StyledButton, WeekRow } from './Dashboard.styles'
import ButtonWeek from './ButtonWeek'

const PlannerHeader = ({ onGetDayHandler }) => {
  const days = [
    {id: 'firstDay', day: 'Monday', value: 'monday'},
    {id: 'secondDay', day: 'Tuesday', value: 'tuesday'},
    {id: 'thirdDay', day: 'Wednesday', value: 'wednesday'},
    {id: 'fourthDay', day: 'Thursday', value: 'thursday'},
    {id: 'fifthDay', day: 'Friday', value: 'friday'},
    {id: 'sixthDay', day: 'Saturday', value: 'saturday'},
    {id: 'seventhDay', day: 'Sunday', value: 'sunday'},
  ];

  const getDayWeek = (e) => {
    console.log(e);
  };

  return (
    <WeekRow>
      {/* {
        days.map((day) => {
          return <StyledButton day={day.value} value={day.value} onClick={getDayWeek}>
            {day.day}
          </StyledButton>
        })
      } */}
      <ButtonWeek day={'Monday'} buttonValue={'monday'} />
      <ButtonWeek day={'Tuesday'} buttonValue={'tuesday'} />
      <ButtonWeek day={'Wednesday'} buttonValue={'wednesday'} />
      <ButtonWeek day={'Thursday'} buttonValue={'thursday'} />
      <ButtonWeek day={'Friday'} buttonValue={'friday'} />
      <ButtonWeek day={'Saturday'} buttonValue={'saturday'} />
      <ButtonWeek day={'Sunday'} buttonValue={'sunday'} />
    </WeekRow>
  )
}

export default PlannerHeader
