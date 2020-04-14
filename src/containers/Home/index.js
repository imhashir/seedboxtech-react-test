import React, {useState} from 'react';
import MenuSection from "../../components/MenuSection";
import Button from "../../components/Button";
import StartGameModal from "../../components/StartGameModal";
import style from './index.module.css';

export default props => {
    const [isOpen, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!isOpen);
    }

    return (
        <div>
            <MenuSection>
                <div className={style.buttonContainer}>
                    <div className={style.menuItems}>
                        <Button onClick={(e) => {
                            console.log(e)
                            toggleModal()
                        }}>New Game</Button>
                    </div>
                    <div className={style.menuItems}>
                        <Button>Credit</Button>
                    </div>
                    <div className={style.menuItems}>
                        <Button className={style.exitButton}>
                            <div style={{ marginRight: '2px' }}>
                                Exit
                            </div>
                            <img src='/assets/logout-icon.svg' height={12} width={12} alt='Exit' />
                        </Button>
                    </div>
                </div>
            </MenuSection>
            <StartGameModal
                isOpen={isOpen}
                onStart={(player1, player2) => {
                    console.log("player1:", player1);
                    console.log("player2:", player2);
                    toggleModal();
                }}
            />
        </div>
    );
}