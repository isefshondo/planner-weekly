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
};

// export interface InputProps {
//   id: string,
//   name?: string,
//   type: string,
//   placeholder: string,
//   label?: string,
//   icon?: string,
//   alt?: string,
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
//   onFocus?: () => void,
//   onBlur?: () => void,
//   hasLabel: boolean,
//   hasIcon: boolean,
// };

// export interface ErrorMessageProps {
//   errorMessage?: string,
//   errorPattern?: boolean,
// }

export interface RegisterProps {
  enteredFirstName: string,
  enteredLastName: string,
  enteredBirthDate: string,
  enteredCountry: string,
  enteredCity: string,
  enteredEmail: string,
  enteredPassword: string,
  enteredConfirmPassword: string,
}

export interface ApplicationContext {
  isLoggedIn: boolean,
  onLogin: (
    username: string,
    password: string,
    isLoginValid: React.SetStateAction<boolean>
  ) => void,
  onLogout: () => void,
  onRegister: (obj: string) => void,
  enteredUser: RegisterProps
}

export interface StyledErrorMessageProps {
  isTouched: boolean,
  errorPattern: boolean | undefined,
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
};