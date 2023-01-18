import React from 'react'

const WeekSelect = () => {
  return (
    <React.Fragment>
      <select id="weekdays" className='weekdays-select'>
        <option value="monday">Monday</option>
        <option value="tueday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="saturday">Saturday</option>
        <option value="sunday">Sunday</option>
      </select>
    </React.Fragment>
  )
}

export default WeekSelect
