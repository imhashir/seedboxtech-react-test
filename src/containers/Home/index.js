import React from 'react';
import MenuSection from "../../components/MenuSection";
import Button from "../../components/Button";
import './index.css';
import exitIcon from '../../assets/logout-icon.svg';

export default props => {
    return (
        <MenuSection>
            <div className='button-container'>
                <div className='menu-items'>
                    <Button>New Game</Button>
                </div>
                <div className='menu-items'>
                    <Button>Credit</Button>
                </div>
                <div className='menu-items'>
                    <Button className='exit-button'>
                        <div style={{ marginRight: '2px' }}>
                            Exit
                        </div>
                        <img src={exitIcon} height={12} width={12} alt='Exit' />
                    </Button>
                </div>
            </div>
        </MenuSection>
    );
}
