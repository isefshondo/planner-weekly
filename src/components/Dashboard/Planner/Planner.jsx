import React from 'react'
import { WeekRow } from './Dashboard.styles'
import ButtonWeek from './ButtonWeek'

const Planner = () => {
  return (
    <React.Fragment>
      <WeekRow>
          <ButtonWeek day={'Monday'} buttonValue={'monday'} />
          <ButtonWeek day={'Tuesday'} buttonValue={'tuesday'} />
          <ButtonWeek day={'Wednesday'} buttonValue={'wednesday'} />
          <ButtonWeek day={'Thursday'} buttonValue={'thursday'} />
          <ButtonWeek day={'Friday'} buttonValue={'friday'} />
          <ButtonWeek day={'Saturday'} buttonValue={'saturday'} />
          <ButtonWeek day={'Sunday'} buttonValue={'sunday'} />
        </WeekRow>
    </React.Fragment>
  )
}

export default Planner
