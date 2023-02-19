import axios from "axios";
import React from "react";
import { ButtonWrapper, InputWrapper, StyledButtonTask, StyledFormTask, StyledInputTask } from "./styles";
import authHeader from "../../../auth/auth-header";
import { FormProps } from "../../../interfaces/dashboard-interfaces";
import Select from "./Select";

const PlannerForm = (props: FormProps) => {
  const url: string = "https://latam-challenge-2.deta.dev/api/v1";
  const [enteredTitle, setEnteredTitle] = React.useState<string>("");
  const [enteredDay, setEnteredDay] = React.useState<string>("MONDAY");

  const onDeleteAll = (selectedWeekDay: string) => {
    const response = axios.delete(`${url}/events?dayOfWeek=${selectedWeekDay.toLocaleLowerCase()}`, {
      headers: authHeader(),
    }).then(data => {
      if(data.status === 200) {
        props.refetchEvents();
      }
    }).catch(err => {
      if(err.response.data.errors && err.response.data.errors !== null) {
        const errorsMessage: Array<string> = err.response.data.errors;
        errorsMessage.map(messages => alert(messages));
      } else {
        alert(err.response.data.message);
      }
    });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const response = axios.post(`${url}/events/`, {
      description: enteredTitle,
      dayOfWeek: enteredDay.toLocaleLowerCase(),
    }, {
      headers: authHeader()
    }).then(data => {
      if(data.status === 201) {
        props.refetchEvents();
      }
    }).catch((err) => {
      if(err.response.data.errors && err.response.data.errors !== null) {
        const errorsMessages: Array<string> = err.response.data.errors;
        errorsMessages.map(messages => alert(messages));
      } else {
        alert(err.response.data.message);
      }
    });

    // Reseting Input
    setEnteredTitle("");
    setEnteredDay("MONDAY");
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
      </InputWrapper>
      <ButtonWrapper>
        <StyledButtonTask type="submit">+ Add to calendar</StyledButtonTask>
        <StyledButtonTask type="button" onClick={() => onDeleteAll(props.selectedDay)}>- Delete All</StyledButtonTask>
      </ButtonWrapper>
    </StyledFormTask>
  );
};

export default PlannerForm;