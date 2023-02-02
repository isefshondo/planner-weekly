import styled from "styled-components";
import Background from "../imgs/main-img.png";
import PlannerLogo from "../imgs/logo-uol.svg"

/* Defining Props to Styled */

type StyledButtonTaskProps = {
  type: string,
};

type StyledInputTaskProps = {
  inputType: string,
}

type StyledErrorMessageProps = {
  isTouched: boolean,
  errorPattern: boolean,
}

type StyledErrorProps = {
  hasIcon?: boolean,
  isAnimated: boolean,
};

type StyledLoginErrorProps = {
  isFormSent: boolean,
  errorPattern: boolean,
};

type StyledButtonProps = {
  enteredButtonAction: string,
};

type WrapperProps = {
  isPlanner: boolean,
};

/* End of Defininf Props */

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  color:  #e0e0e0;
  ${(props) => props.isPlanner && (
    `
      flex-direction: column;
      background-image: url(${PlannerLogo});
      background-repeat: no-repeat;
      background-position: bottom right;
      height: 100vh;
      background-color: rgba(255, 255, 255, 0.9);
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

export const StyledMessage = styled.hgroup`
  & h1{
    font-size: 60px;
    font-weight: 400;
  }
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

export const StyledRegisterForm = styled.form`
  margin-top: 4.2rem;
  width: 29.5rem;
`;

export const StyledLoginForm = styled.form`
  margin-top: 8.438rem;
`;

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  
  & h3{
    font-size: 1.875rem;
    font-weight: 400;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.125rem;

  & span{
    padding-top: 1.125rem;
    padding-bottom: 0;
    text-align: right;
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

export const StyledLoginError = styled.div<StyledLoginErrorProps>`
  & input{
    border: 1px solid ${(props) => props.isFormSent && !props.errorPattern ? `#E9B425` : `#FFF`};
  }
`;

export const StyledLabel = styled.label<StyledErrorProps>`
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

export const StyledInput = styled.input`
  width: 379px;
  background: transparent;
  border: 1px solid #FFF;
  border-radius: 50px;
  color: #E0E0E0;
  outline: none;
  padding: 1.25rem;

`;

export const InvalidForm = styled.span`
  display: flex;
  align-items: center;
  height: 7.2rem;
  color: #E9B425;
  text-align: center;
`;

export const GeneralButton = styled.button<StyledButtonProps>`
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

export const StyledSelect = styled.select`
  width: 15rem;
  background-color: white;
  border: .065rem solid #FECE00;
  border-radius: 10px;
  padding-block: .782rem;
  padding-inline: .5rem;
`;

export const StyledInputTask = styled.input<StyledInputTaskProps>`
  width: ${(props) => props.inputType === "Task" ? `24.438rem` : `7.5rem`};
  background-color: white;
  border: .065rem solid #FECE00;
  border-radius: 10px;
  padding-block: .782rem;
  padding-inline: .5rem;
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

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

/* A organized start right there */
export const StyledHeader = styled.header`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-block-start: 1.519rem;
  padding-block-end: 1.813rem;
`;

export const DescriptionWrapper = styled.hgroup`
  width: 36.75rem;
  height: 4rem;
  background-color: #000;
  border-radius: 0px 14px 15px 0px;
  color: #fff;
  padding-block: 0.625rem;
  padding-inline: 1.5rem;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ClockWrapper = styled.hgroup`
  text-align: center;

  & h1{
    font-size: 2.5rem;
  }

  & p{
    font-size: 1.25rem;
  }
`;

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & h6{
    font-weight: 400;
  }
`;

export const StyledWeather = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
`;

export const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 1.313rem;
  padding-inline-end: 1.438rem;
`;

export const StyledLogoutButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: transparent;
`;