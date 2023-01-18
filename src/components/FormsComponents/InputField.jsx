import React from 'react'

const InputField = ({id, type, placeholder, iconImg, alt}) => {
  return (
    <React.Fragment>
      <label htmlFor={id}>
        <input type={type} placeholder={placeholder} />
        <img src={iconImg} alt={alt} />
      </label>
    </React.Fragment>
  )
}

export default InputField
