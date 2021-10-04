import React from 'react'
import { useHistory } from "react-router";

export function Button({
    children,
    type,
    text,
    className,
    value,
    link,
    onClick,
    label

}) {
    return (
        <button
            type={type}
            text={text}
            className={className}
            value={value}
            link={link}
            onClick={onClick}> 
            {label}
            {children}
        </button>

    )
}

export default function ButtonItens({
  buttonType,
  buttonOnClick,
  buttonText,
}) {
  return (
    <button
      type={buttonType}
      onClick={buttonOnClick}>
      {buttonText}
    </button>
  );
}

export function ButtonLogout( {
  className
} ) {

    const history = useHistory()
  
      const logOut = () => {
      localStorage.clear()
      history.push('/')
      }
    
  
      return (
              <button 
              onClick={logOut} 
              className={className}>
              </button>
      )
  };

export function BackButton({ 
  btnClassName, 
  btnOnClick 
}) {
    return (
      <button 
      className={btnClassName} 
      type="backButton" 
      onClick={btnOnClick}>
        voltar
      </button>
    );
  }


//import { Button } from '../Button/button';

/* function Button(props) {
    const { name, onClick } = props  //mesma coisa de const name = props.name//

    return (
        <button onClick={onClick}>{name}</button>

    )
}

export default Button;*/