import React from 'react'
import ButtonAction from './ButtonAction'
import { InputWrapper, StyledFormTask } from './Form.styles'
import Input from './Input'
import Select from './Select'

const FormTask = ({ onAddNewTask }) => {
  const enteredTitle = React.useRef(null);
  const enteredDay = React.useRef(null);
  const enteredTime = React.useRef(null);

  const saveTaskHandler = (enteredNewTask) => {
    const tasksData = {
      ...enteredNewTask,
      id: Math.random().toString()
    }

    onAddNewTask(tasksData);
  };

  const onTaskSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      title: enteredTitle.current.value,
      day: enteredDay.current.value,
      time: enteredTime.current.value,
    };

    saveTaskHandler(taskData);
  };

  return (
    <StyledFormTask onSubmit={onTaskSubmit}>
      <InputWrapper>
        <Input reference={enteredTitle} type={'text'} placeholder={'Task or issue'} />
        <Select reference={enteredDay} />
        <Input reference={enteredTime} type={'time'} />
      </InputWrapper>
      <InputWrapper variant='buttons'>
        <ButtonAction type={'submit'}>+ Add Task</ButtonAction>
        <ButtonAction type={'button'}>- Delete All</ButtonAction>
      </InputWrapper>
    </StyledFormTask>
  )
}

export default FormTask
