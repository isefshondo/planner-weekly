import React from 'react'

const InputFormLogin = ({ id, icon, alt, reference, type, onBlur, onChange, placeholder }) => {
  return (
    <label htmlFor={id}>
      <input ref={reference} id={id} type={type} placeholder={placeholder} onBlur={onBlur} onChange={onChange} />
      <img src={icon} alt={alt} />
    </label>
  )
}

export default InputFormLogin
