import React from 'react'
import { AuthContext } from '../../../context/AuthContext'
import ButtonAction from './ButtonAction'
import { InputWrapper, StyledFormTask } from './Form.styles'
import Input from './Input'
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
        <Input reference={enteredTitle} type={'text'} placeholder={'Task or issue'} />
        <Select reference={enteredDay} />
        <Input reference={enteredTime} type={'time'} />
      </InputWrapper>
      <InputWrapper variant='buttons'>
        <ButtonAction type={'submit'}>+ Add to calendar</ButtonAction>
        <ButtonAction type={'button'} onClick={() => onDeleteAll(getWeekDay)}>- Delete All</ButtonAction>
      </InputWrapper>
    </StyledFormTask>
  )
}

export default FormTask
