import axios from "axios";
import React from "react";
import { ButtonWrapper, InputWrapper, StyledButtonTask, StyledFormTask, StyledInputTask } from "../../../assets/styles/Global.styles";
import authHeader from "../../../auth/auth-header";
import { Assignments, FormProps } from "../../../interfaces/Dashboard";
import Select from "./Select";

const PlannerForm = (props: FormProps) => {
  const url: string = "https://latam-challenge-2.deta.dev/api/v1";
  const [enteredTitle, setEnteredTitle] = React.useState<string>("");
  const [enteredDay, setEnteredDay] = React.useState<string>("MONDAY");
  const [enteredTime, setEnteredTime] = React.useState<string>("");

  const onInputTimeHandler = (entereTimeInput: string) => {
    const regex = /(\d{2})(\d{2})/;
    const formatedTime = entereTimeInput.replace(regex, "$1h $2m");
    return setEnteredTime(formatedTime);
  };

  const onDeleteAll = (selectedWeekDay: string) => {
    props.setEnteredTasks(props.enteredTasks.filter((tasks) => tasks.dayOfWeek !== selectedWeekDay));
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const response = axios.post(`${url}/events/`, {
      description: enteredTitle,
      dayOfWeek: enteredDay.toLocaleLowerCase(),
    }, {
      headers: authHeader()
    }
    ).catch((err) => alert(err));

    // Reseting Input
    setEnteredTitle("");
    setEnteredDay("MONDAY");
    setEnteredTime("");
  };

  return (
    <StyledFormTask onSubmit={onSubmitHandler}>
      <InputWrapper>
        <StyledInputTask
          inputType="Task"
          type="text"
          placeholder="Task or issue"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEnteredTitle(e.target.value);
          }}
          value={enteredTitle}
        />
        <Select setWeekDay={setEnteredDay} valueWeekDay={enteredDay} />
        <StyledInputTask
          inputType="Time"
          type="text"
          id="taskTime"
          placeholder="01h 32m"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            onInputTimeHandler(e.target.value)
          }
          value={enteredTime}
        />
      </InputWrapper>
      <ButtonWrapper>
        <StyledButtonTask type="submit">+ Add to calendar</StyledButtonTask>
        <StyledButtonTask type="button" onClick={() => onDeleteAll(props.selectedDay)}>- Delete All</StyledButtonTask>
      </ButtonWrapper>
    </StyledFormTask>
  );
};

export default PlannerForm;