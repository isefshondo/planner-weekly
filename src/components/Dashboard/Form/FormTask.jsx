import React from 'react'
import { InputWrapper, StyledAction, StyledFormTask, StyledInput } from './Form.styles'
import Select from './Select'

const FormTask = ({ onAddAssignment, getWeekDay, tasks, setTasks }) => {
  const enteredTitle = React.useRef(null);
  const enteredDay = React.useRef(null);
  const enteredTime = React.useRef(null);

  const onDeleteAll = (day) => {
    setTasks(tasks.filter((cards) => cards.selectDay !== day))
  };

  const onTaskSubmit = (e) => {
    e.preventDefault();

    const eachTaskInformation = {
      selectDay: enteredDay.current.value,
      choosenTime: enteredTime.current.value,
      description: enteredTitle.current.value,
      conflictedTasks: [enteredTitle.current.value],
    };

    onAddAssignment(eachTaskInformation);
  };

  return (
    <StyledFormTask onSubmit={onTaskSubmit}>
      <InputWrapper>
        <StyledInput ref={enteredTitle} type='text' placeholder='Task or issue' />
        <Select reference={enteredDay} />
        <StyledInput ref={enteredTime} type='time' />
      </InputWrapper>
      <InputWrapper variant='buttons'>
        <StyledAction type="submit">+ Add to calendar</StyledAction>
        <StyledAction type="button" onClick={() => onDeleteAll(getWeekDay)}>- Delete All</StyledAction>
      </InputWrapper>
    </StyledFormTask>
  )
}

export default FormTask
