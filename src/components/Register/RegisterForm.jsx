import React from 'react'
import { useNavigate } from 'react-router-dom';
import FieldComponent from './FieldComponent';
import { AuthContext } from '../../context/AuthContext';
import { GeneralButton } from '../../Global.styles';
import { FormRegisterWrapper, InvalidMessage, RegisterInputWrapper } from './Register.styles';

const RegisterForm = () => {
  const [isFormValid, setIsFormValid] = React.useState(true);
  const authCtx = React.useContext(AuthContext);

  const navigate = useNavigate();
  
  const firstName = React.useRef(null);
  const lastName = React.useRef(null);
  const birthDate = React.useRef(null);
  const country = React.useRef(null);
  const city = React.useRef(null);
  const email = React.useRef(null);
  const password = React.useRef(null);
  const confirmPassword = React.useRef(null);
  
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    
    const isNameValid = firstName.current.value.length >= 2 && !/\d/.test(firstName.current.value);
    const isLastNameValid = lastName.current.value.length >= 2 && !/\d/.test(lastName.current.value);
    const isCountryValid = country.current.value.length > 0;
    const isCityValid = city.current.value.length > 0;
    const isEmailValid = email.current.value.includes('@');
    const isPasswordEqual = password.current.value === confirmPassword.current.value && password.current.value.length === confirmPassword.current.value.length;

    if (
      isNameValid === true &&
      isLastNameValid === true &&
      isCountryValid === true &&
      isCityValid === true &&
      isEmailValid === true &&
      isPasswordEqual === true
    ) {
      authCtx.onRegister(
        JSON.stringify(
          {
            fullName: firstName.current.value + ' ' + lastName.current.value,
            birthDate: birthDate.current.value,
            country: country.current.value,
            city: city.current.value,
            email: email.current.value,
            password: password.current.value,
          }
        )
      );
      navigate('login');
    } else{
      setIsFormValid(false);
    }

  };

  return (
    <React.Fragment>
      <FormRegisterWrapper onSubmit={onFormSubmitHandler}>
        <RegisterInputWrapper>
          <FieldComponent
            id={"first-name"}
            reference={firstName}
            label={"first name"}
            type={"text"}
            placeholder={"Your first name"}
            isValid={isFormValid}
          />
          <FieldComponent
            id={"last-name"}
            reference={lastName}
            label={"last name"}
            type={"text"}
            placeholder={"Your last name"}
            isValid={isFormValid}
          />
          <FieldComponent
            id={"birth-date"}
            reference={birthDate}
            label={"birth date"}
            type={"text"}
            placeholder={"MM/DD/YYYY"}
            isValid={isFormValid}
          />
          <FieldComponent
            id={"country"}
            reference={country}
            label={"Country"}
            type={"text"}
            placeholder={"Your country"}
            isValid={isFormValid}
          />
          <FieldComponent
            id={"city"}
            reference={city}
            label={"City"}
            type={"text"}
            placeholder={"Your city"}
            isValid={isFormValid}
          />
          <FieldComponent
            id={"email"}
            reference={email}
            label={"e-mail"}
            type={"email"}
            placeholder={"A valid e-mail here"}
            isValid={isFormValid}
          />
          <FieldComponent
            id={"password"}
            reference={password}
            label={"password"}
            type={"password"}
            placeholder={"Your password"}
            isValid={isFormValid}
          />
          <FieldComponent
            id={"confirm-password"}
            reference={confirmPassword}
            label={"password"}
            type={"password"}
            placeholder={"Confirm your password"}
            isValid={isFormValid}
          />
        </RegisterInputWrapper>
        <InvalidMessage>
          {!isFormValid && <p>Check if it's all filled in correctly and if the passwords match.</p>}
        </InvalidMessage>
        <GeneralButton>
          Register Now
        </GeneralButton>
      </FormRegisterWrapper>
    </React.Fragment>
  );
}

export default RegisterForm
