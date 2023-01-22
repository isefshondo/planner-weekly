import React from 'react'
import { InputFormWrapper } from './Login.styles';
import { InputForm } from '../../Global.styles';

const InputFormLogin = ({ id, icon, alt, reference, type, placeholder, inputState, onChange, isValid }) => {
  return (
    <InputFormWrapper htmlFor={id} inputState={inputState}>
      <InputForm
        ref={reference}
        id={id}
        type={type}
        placeholder={placeholder}
        inputState={inputState}
        onChange={onChange}
        isValid={isValid}
      />
      <img src={icon} alt={alt} />
    </InputFormWrapper>
  );
}

export default InputFormLogin
