import * as React from "react";
import './style.css';


const Input = (props) => {
    let inputElement = null;

    switch (props.itype) {
        case ('input'):
            inputElement = <input 
            type={props.type} 
            // pattern={props.pattern}
            id={props.id}
            placeholder={props.label} 
            required={true} 
            name={props.labelfor} 
            className='input-element' 
            // onChange={props.change}
            // onKeyPress={props.press}
            />
            break;
        case ('textarea'):
            inputElement = <textarea name={props.labelfor} className='Input-Element' {...props}/>
            break;
        case ('radio'):
            inputElement = <input type='radio' className='Input-Element' {...props}/>
            break;
        case ('checkbox'):
            inputElement = <input type='checkbox' className='Input-Element' {...props}/>
            break;
        default:
    inputElement = <input className='input-element' {...props} />
    }

        return(
            <div id='Input'>
                {inputElement}
                <label className='Label' htmlFor={props.labelfor}>{props.label}</label>
            </div>
        );
}

export default Input;