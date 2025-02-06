import React, { useState } from 'react';
import './Button.css' 

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div style={modalStyles}>
            <div style={modalContentStyles}>
                <button onClick={onClose} style={closeButtonStyles}>✖️</button>
                <h2>Обратная связь</h2>
                <form>
                    <label className="label, "htmlFor="email">Email:</label>
                    <input id="email" type="email" />
                    <label htmlFor="phone">Phone:</label>
                    <input id="phone" type="tel" />
                    <div><label htmlFor="message">Message:</label>
                    <textarea id="message"></textarea></div>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default function Button() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <>
            <button onClick={handleOpenModal}>Обратная связь</button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
}

// Стили
const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',

};

const modalContentStyles = {
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '20px',
    position: 'relative',
    };

const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
};
