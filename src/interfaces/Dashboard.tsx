import React from "react";

export interface Assignments {
  id: string,
  title: string,
  selectedDay: string,
  choosenTime: string,
  conflictedTasks: Array<string>,
}

export interface DescriptionProps {
  title: string,
  message: string,
}

export interface FormProps {
  addNewTask: (tasks: Assignments) => void,
  enteredTasks: Array<Assignments>,
  setEnteredTasks: React.Dispatch<React.SetStateAction<Assignments[]>>,
  selectedDay: string,
}

export interface ActionProps {
  enteredTasks: Array<Assignments>,
  setEnteredTasks: React.Dispatch<React.SetStateAction<Assignments[]>>,
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>,
}

export interface WeatherProps {
  temp: React.SetStateAction<number>,
}

export interface SelectProps {
  valueWeekDay: string;
  setWeekDay: React.Dispatch<React.SetStateAction<string>>;
}

export interface SelectDayProps {
  setSelectedDayFilter: (selectedWeekDay: string) => void,
  choosenDay: string,
}

export interface TimeProps {
  belongDay: string,
  belongTime: string,
  hasConflict: boolean,
}

export interface CardsProps {
  id: string,
  selectedDay: string,
  description: string,
  hasConflict: boolean,
  onClick: () => void,
}