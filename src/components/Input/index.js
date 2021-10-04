import React from "react";

export function Input ({
    inputType,
    inputText,
    inputName,
    inputPlaceholder,
    inputOnChange,
    inputValue  
}) {
    return (
        <input 
            type={inputType}
            text={inputText}
            name={inputName}
            placeholder={inputPlaceholder}
            onChange={inputOnChange}
            value={inputValue}
            />
    )
}