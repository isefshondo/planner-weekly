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
  onLogin: (
    username: string,
    password: string,
  ) => void,
  onLogout: () => void,
  onRegister: (obj: string) => void,
  enteredUser: RegisterProps
}