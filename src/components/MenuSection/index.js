import React from 'react';
import './index.css';
import logo from '../../assets/logo.svg';

const MenuSection = props => {
    return (
        <div className="main">
            <img src={logo} alt={"App Logo"}/>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default MenuSection;