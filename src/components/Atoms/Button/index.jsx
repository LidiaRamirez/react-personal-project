import React from 'react'

const Button = ({type, textButton, disable=false, onClick}) => ( 
  <>
    { type === 'submit' 
      ? <input className="button" value={textButton} type="submit" disabled={disable}/>
      : <button className="button" disabled={disable} onClick={onClick}>{textButton}</button>
    }  
  </> 
)

export default Button;