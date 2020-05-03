import React from 'react';
import { func, string } from 'prop-types'
import './Button.css'

function Button(props) {

    return (
        <button type={props.type} className={`btn btn-${props.theme} btn-${props.size}`} onClick={props.onClick}>
            {props.label}
        </button>
    );
}

Button.defaultProps = {
    size:"normal",
    type: "button",
    label: "Button",
    theme: "default",
    onClick: () => { }
};

Button.propTypes = {
    size: string,
    type: string,
    label: string,
    theme: string,
    onClick: func.isRequired,
}

export default Button;