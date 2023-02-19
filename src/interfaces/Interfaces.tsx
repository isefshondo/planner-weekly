import React, { SetStateAction } from "react";

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
  firstName: string,
  lastName: string,
  birthDate: string,
  country: string,
  city: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export interface ApplicationContext {
  isLoggedIn: boolean,
  onLogout: () => void,
  setEnteredUser: React.Dispatch<SetStateAction<RegisterProps>>,
  enteredUser: RegisterProps,
  setIsLoggedIn: React.Dispatch<SetStateAction<boolean>>,
}

export interface ModalProps {
  errorMessage: string,
}