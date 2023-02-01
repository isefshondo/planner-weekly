import React from "react";
import { Assignments, PlannerFormProps } from "../../../interfaces/Interfaces";

const PlannerForm = (props: PlannerFormProps) => {
  const [enteredTitle, setEnteredTitle] = React.useState<string>("");
  const [enteredDay, setEnteredDay] = React.useState<string>("");
  const [enteredTime, setEnteredTime] = React.useState<string>("");

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const addTaskInformation: Assignments = {
      id: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
      title: enteredTitle,
      selectedDay: enteredDay,
      choosenTime: enteredTime,
      conflictedTasks: [enteredTitle]
    };

    props.addNewTask(addTaskInformation);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input 
        type="text"
        placeholder="Task or issue"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEnteredDay(e.target.value)
        }}
      />
    </form>
  );
};

export default PlannerForm;