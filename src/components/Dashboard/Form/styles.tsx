import styled from "styled-components";
import { StyledButtonTaskProps, StyledInputTaskProps } from "../../../interfaces/styles-interfaces";

/* Form's Style */
export const StyledFormTask = styled.form`
  display: flex;
  justify-content: space-between;
  padding-inline: 1.5rem;
  padding-block-start: 2.188rem;
  padding-block-end: 1.375rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  column-gap: .188rem;
`;

export const StyledInputTask = styled.input<StyledInputTaskProps>`
  width: ${(props) => props.inputType === "Task" ? `24.438rem` : `7.5rem`};
  background-color: white;
  border: .065rem solid #FECE00;
  border-radius: 10px;
  padding-block: .782rem;
  padding-inline: .5rem;
  outline: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

export const StyledButtonTask = styled.button<StyledButtonTaskProps>`
  width: 12.5rem;
  background-color: ${(props) => props.type === "submit" ? "#00BA88" : "#FF3D1F"};
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  padding-block: .782rem;
  padding-inline: .75rem;
`;
/* End of Form's Style */

/* Select's Style */
export const StyledSelect = styled.select`
  width: 15rem;
  background-color: white;
  border: .065rem solid #FECE00;
  border-radius: 10px;
  padding-block: .782rem;
  padding-inline: .5rem;
  outline: none;
`;
/* End of Select's Style */