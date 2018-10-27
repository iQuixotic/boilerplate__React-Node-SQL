import React from "react";
import './style.css';

const DropDown = (props) => {
    return (   
        <select className="dropdown">
            {props.children}
        </select>
    );
}

export default DropDown;