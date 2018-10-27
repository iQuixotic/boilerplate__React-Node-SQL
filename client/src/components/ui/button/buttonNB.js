import React from "react";
import './style.css';

const ButtonNB = (props) => {
    return (   
        <button className='btn button_nb'>{props.children}</button>
    );
}

export default ButtonNB;