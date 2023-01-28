import React from "react";

export interface InputProps {
  id: string,
  type: string,
  placeholder: string,
  label?: string,
  icon?: string,
  alt?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onFocus?: () => void,
  onBlur?: () => void,
  hasLabel: boolean,
  hasIcon: boolean,
};