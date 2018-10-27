import * as React from "react";
import './style.css';
import { NavItem } from '../../../components';

const NavItems = (props) => {
    return (
        <ul id={props.id} className='nav-items'>        
            <NavItem link='/lang=html'>HTML</NavItem>                            
            <NavItem link='/lang=css'>CSS</NavItem>    
            <NavItem link='/lang=js'>Javascript</NavItem>  
            <NavItem link='/lang=c-sharp'>C#</NavItem>   
            <NavItem link='/lang=php'>PHP</NavItem>               
        </ul>
    );
}

export default NavItems;