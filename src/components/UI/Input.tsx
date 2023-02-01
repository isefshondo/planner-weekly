import React from "react";
import { StyledErrorMessage, StyledInput, StyledLabel } from "../../assets/styles/Global.styles";
import { InputProps } from "../../interfaces/Interfaces";

const Input = (props : InputProps) => {
  const [isInputTouched, setIsInputTouched] = React.useState<boolean>(false);

  const dateMaskHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    e.target.value = v;
  };

  return (
    <React.Fragment>
      {props.hasLabel && !props.hasIcon && props.id === "birth-date" && (
        <StyledErrorMessage
          isTouched={isInputTouched}
          errorPattern={props.errorPattern}
        >
          <StyledLabel
            key={props.id}
            htmlFor={props.id}
            isTouched={isInputTouched}
            errorPattern={props.errorPattern}
            isAnimated={props.isAnimated}
          >
            {props.label}
            <StyledInput
              id={props.id}
              name={props.name}
              type={props.type}
              placeholder={props.placeholder}
              onChange={props.onChange}
              onInput={dateMaskHandler}
              onFocus={() => setIsInputTouched(true)}
            />
          </StyledLabel>
          <span>{props.errorMessage}</span>
        </StyledErrorMessage>
      )}
      {props.hasLabel && !props.hasIcon && props.id !== "birth-date" && (
        <StyledErrorMessage
          isTouched={isInputTouched}
          errorPattern={props.errorPattern}
        >
          <StyledLabel
            key={props.id}
            htmlFor={props.id}
            isTouched={isInputTouched}
            errorPattern={props.errorPattern}
            isAnimated={props.isAnimated}
          >
            {props.label}
            <StyledInput
              id={props.id}
              name={props.name}
              type={props.type}
              placeholder={props.placeholder}
              onChange={props.onChange}
              onFocus={() => setIsInputTouched(true)}
            />
            <span>{props.errorMessage}</span>
          </StyledLabel>
        </StyledErrorMessage>
      )}
      {!props.hasLabel && props.hasIcon && props.id !== "birth-date" && (
        <StyledLabel
          key={props.id}
          htmlFor={props.id}
          errorPattern={props.errorPattern}
          isAnimated={props.isAnimated}
        >
          <StyledInput
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
          <img src={props.icon} alt={props.alt} />
        </StyledLabel>
      )}
    </React.Fragment>
  );
};

export default Input;