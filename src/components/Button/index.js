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
  btnType,
  btnOnClick,
  children
}) {
  return (
    <button
      type={btnType}
      onClick={btnOnClick}>
      {children}
    </button>
  );
}

export function ButtonLogout({
  className
}) {

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
};