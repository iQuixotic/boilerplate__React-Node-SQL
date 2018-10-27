import * as React from "react";
import { NavItems, Input, ButtonNB, ButtonS } from '../../../components';
import {Icon} from 'react-fa';
import './style.css';

const Toolbar = (props) => {
    return (
        <nav className='toolbar'>
            <div className="toolbar_sticky">
                <div className="toolbar_logo">
                    Codecan            
                </div>
                <div className="toolbar_search">
                    <span class="mag-glass"><Icon size='2x' name="search" /></span>
                    <Input/>         
                </div>
                <div className="toolbar_buttons">
                    <ButtonNB>Sign Up</ButtonNB>
                    <ButtonS>Login</ButtonS>
                </div>
            </div>
            <div className="toolbar_bottom">
                <NavItems />
            </div>
            {props.children}
        </nav>
    );
}

export default Toolbar;