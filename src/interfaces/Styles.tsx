import React from "react";

export interface StyledTaskProps {
  selectedDay: string,
  hasConflict: boolean,
}

export interface StyledWrapperProps {
  isPlanner: boolean,
}

export interface StyledButtonActionProps {
  enteredButtonAction: string,
}

export interface StyledInputProps {
  hasIcon?: boolean,
  isAnimated: boolean,
}

export interface StyledLoginErrorProps {
  isFormSent: boolean,
  errorPattern: boolean,
}

export interface StyledErrorMessageProps {
  isTouched: boolean,
  errorPattern: boolean,
}

export interface StyledInputTaskProps {
  inputType: string,
}

export interface StyledButtonTaskProps {
  type: string,
}

export interface StyledDayProps {
  value: string,
  isSelected: boolean,
}

export interface StyledCardsWrapperProps {
  hasConflict: boolean,
}