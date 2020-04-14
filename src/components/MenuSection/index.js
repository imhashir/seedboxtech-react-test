import React from 'react';
import style from './index.module.css';

const MenuSection = props => {
    return (
        <div className={style.main}>
            <div className={style.imageContainer}>
              <img src='/assets/logo.svg' alt={"App Logo"}/>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default MenuSection;