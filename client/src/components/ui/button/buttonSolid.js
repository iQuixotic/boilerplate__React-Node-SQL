import React from "react";
import './style.css';

const ButtonS = (props) => {
    return (   
        <button className='btn button_solid'>{props.children}</button>
    );
}

export default ButtonS;