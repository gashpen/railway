import React from "react";
import './input.css'
const Input = (props) => {
    return ( 
        <input 
            className={`input ${props.userClass}`}
            type={props.type} 
            name={props.name} 
            value={props.value} 
            placeholder={props.placeholder}
        />
    );
}
 
export default Input;