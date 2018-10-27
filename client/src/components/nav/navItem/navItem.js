import * as React from "react";
import './style.css';

const NavItem = (props) => {
    return (
        <li class='navItem'><a href={props.link}>{props.children}</a></li>
    );
}

export default NavItem;
