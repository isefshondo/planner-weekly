import React from 'react'
import { InputFormWrapper } from './Login.styles';
import { InputForm } from '../../Global.styles';

const InputFormLogin = ({ id, icon, alt, reference, type, placeholder, inputState, onChange }) => {
  return (
    <InputFormWrapper htmlFor={id} inputState={inputState}>
      <InputForm
        ref={reference}
        id={id}
        type={type}
        placeholder={placeholder}
      />
      <img src={icon} alt={alt} />
    </InputFormWrapper>
  );
}

export default InputFormLogin
