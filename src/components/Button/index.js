import React from 'react';
import style from './index.module.css';
import PropTypes from 'prop-types';

const Button = props => {
    return (
        <button style={{
            padding: `${props.padding}`,
            ...props.style
        }} onClick={props.onClick} className={`${style.button} ${props.className}`}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    padding: PropTypes.string,
    style: PropTypes.object
}

Button.defaultProps = {
    padding: '1rem 2rem',
    style: {}
}

export default Button;