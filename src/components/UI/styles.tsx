import styled from "styled-components";
import { StyledButtonActionProps, StyledErrorMessageProps, StyledInputProps, StyledLoginErrorProps, StyledWrapperProps } from "../../interfaces/styles-interfaces";

import Background from "../../assets/imgs/main-img.png";
import PlannerLogo from "../../assets/imgs/logo-uol.svg";

/* Main Wrapper Style */
export const Wrapper = styled.div<StyledWrapperProps>`
  display: flex;
  color:  #e0e0e0;

  ${(props) => props.isPlanner && (
    `
      flex-direction: column;
      background-image: url(${PlannerLogo});
      background-repeat: no-repeat;
      background-position: bottom right;
      height: 100vh;
      background-color: #fbfbfb;
      color: #000;
    `
  )}
`;

export const InitialSection = styled.section`
  width: 50%;
  height: 100vh;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  & span{
    display: flex;
    justify-content: center;
    padding-block: 1.25rem;

    & a{
      text-decoration: none;
    }

    & a:visited{
      color: #e0e0e045;
    }
  }
`;
/* End of Main Wrapper Style */

/* Background's Image Style */
export const ImageSection = styled.section`
  width: 50%;
  height: 100vh;
  background: url(${Background});
  background-position: center;
  background-size: cover;
  text-align: center;

  & img{
    margin-top: 36px;
  }
`;
/* End of Background's Image Style */

/* Input's Style */
export const StyledInput = styled.input`
  width: 379px;
  background: transparent;
  border: 1px solid #FFF;
  border-radius: 50px;
  color: #E0E0E0;
  outline: none;
  padding: 1.25rem;

`;

export const StyledLabel = styled.label<StyledInputProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => props.isAnimated ? (`
    & img{
      transform: translateX(-2.375rem);
      transition: transform .25s;
    }
  `) : (`
    & img{
      transform: translateX(1.125rem);
      transition: transform .25s;
    }
  `)}
`;

export const StyledLoginError = styled.div<StyledLoginErrorProps>`
  & input{
    border: 1px solid ${(props) => props.isFormSent && !props.errorPattern ? `#E9B425` : `#FFF`};
  }
`;

export const StyledErrorMessage = styled.div<StyledErrorMessageProps>`
  & span{
    display: ${(props) => props.isTouched && !props.errorPattern ? `block` : `none`};
    color: #E9B425;
  }

  & input{
    border: 1px solid ${(props) => props.isTouched && !props.errorPattern ? `#E9B425` : `#FFF`};
  }
`;
/* End of Input's Style */

/* Message's Style */
export const StyledMessage = styled.hgroup`
  & h1{
    font-size: 60px;
    font-weight: 400;
  }
`;
/* End of Message's Style */

/* Form's General Styles */
export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.125rem;
  margin-bottom: 3.5rem;

  & span{
    padding-top: 1.125rem;
    padding-bottom: 0;
    text-align: right;
  }
`;

export const InvalidForm = styled.span`
  display: flex;
  align-items: center;
  height: 7.2rem;
  color: #E9B425;
  text-align: center;
`;

export const GeneralButton = styled.button<StyledButtonActionProps>`
  width: ${(props) => props.enteredButtonAction === "Login" ? `23.688rem` : `100%`};
  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  border-radius: 50px;
  border-width: 0;
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  color: #E0E0E0;
  font-weight: 700;
  font-size: 2rem;
  padding-block: .75rem;
`;
/* End of Form's General Styles */