import React from 'react'

const Input = ({labelName, name, type="text", value, onChange, maxlength}) => (
  <div className="form__group">
    <input 
      type={type} 
      id={name} 
      name={name} 
      className="form__field" 
      placeholder={labelName} 
      onChange={onChange}
      value={value}
      maxLength={maxlength}
    />
    <label htmlFor={name} className="form__label">{labelName}</label>
  </div>
  
)

export default Input;