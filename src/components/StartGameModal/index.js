import React, {useState} from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Button from "../Button";
import './index.css';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		background: '#383838'
	}
};

const StartGameModal = props => {

	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");

	return (
		<Modal
			isOpen={props.isOpen}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<div className='modal-body'>
				<h3>Start a New Game</h3>
				<div className='input-row'>
					Player 1 <input type='text' value={player1} onChange={e => setPlayer1(e.target.value)}/>
				</div>
				<div className='input-row'>
					Player 2 <input type='text' value={player2} onChange={e => setPlayer2(e.target.value)}/>
				</div>
				<div style={{
					margin: '1em 2em'
				}}>
					<Button padding='0.5rem 2px'>Start!</Button>
				</div>
			</div>
		</Modal>
	);
};

StartGameModal.propTypes = {
	isOpen: PropTypes.bool,
}

export default StartGameModal;