import React from "react";

export interface InputProps {
  id: string,
  name?: string,
  type: string,
  placeholder: string,
  label?: string,
  icon?: string,
  alt?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void,
  onBlur?: () => void,
  errorPattern: boolean,
  errorMessage?: string,
  hasLabel: boolean,
  hasIcon: boolean,
  isAnimated: boolean,
  formState: boolean,
};

export interface RegisterProps {
  enteredFirstName: string,
  enteredLastName: string,
  enteredBirthDate: string,
  enteredCountry: string,
  enteredCity: string,
  enteredEmail: string,
  enteredPassword: string,
  enteredConfirmPassword: string,
  fullName: string,
}

export interface ApplicationContext {
  isLoggedIn: boolean,
  onLogin: (
    username: string,
    password: string,
  ) => void,
  onLogout: () => void,
  onRegister: (obj: string) => void,
  enteredUser: RegisterProps
}

export interface Assignments {
  id: string,
  title: string,
  selectedDay: string,
  choosenTime: string,
  conflictedTasks: Array<string>,
};

export interface PlannerFormProps {
  addNewTask: (tasks: Assignments) => void,
  enteredTasks: Assignments[],
  setEnteredTasks: React.Dispatch<React.SetStateAction<Assignments[]>>,
  selectedDay: string,
};

export interface PlannerProps {
  enteredTasks: Assignments[],
  setEnteredTasks: React.Dispatch<React.SetStateAction<Assignments[]>>,
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>,
};

export interface WeatherProps {
  temp: React.SetStateAction<number>,
};

export interface HeaderDayProps {
  setSelectedDayFilter: (selectedWeekDay: string) => void,
  choosenDay: string,
};

export interface TaskTimeProps {
  belongDay: string,
  belongTime: string,
  hasConflict: boolean,
};

export interface CardsProps {
  id: string,
  selectedDay: string,
  description: string,
  hasConflict: boolean,
  onClick: () => void,
};