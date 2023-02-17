import React from "react";

export interface Assignments {
  _id: string,
  description: string,
  dayOfWeek: string,
  createdAt: string,
  date: string,
  conflictedTasks: Array<ConflictedCardsProps>,
}

export interface ConflictedCardsProps {
  id: string,
  description: string,
}

export interface DescriptionProps {
  title: string,
  message: string,
}

export interface FormProps {
  enteredTasks: Array<Assignments>,
  setEnteredTasks: React.Dispatch<React.SetStateAction<Assignments[]>>,
  selectedDay: string,
  getEnteredEvents: () => void,
}

export interface ActionProps {
  enteredTasks: Array<Assignments>,
  setEnteredTasks: React.Dispatch<React.SetStateAction<Assignments[]>>,
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>,
  getEnteredEvents: () => void,
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