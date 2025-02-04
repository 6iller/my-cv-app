// import PropTypes from 'prop-types';
// import './button.css';

// export default function Button({className, label, disabled = false, onClick }) {
//     return (
//         <>
//         <button className={className} disabled={disabled} onClick={onClick}>{label}</button>
//         <form>
// <label htmlFor="email">email:</label>
// <input id="name"/>
// <label htmlFor="phone">phone:</label>
// <input id="phone"/>
// <label htmlFor="message">message:</label>
// <input id="message"/>
// {/* <input type="checkbox"></input> */}
//     </form>
//     </>
//     );
// };

// Button.propTypes = {
//     className: PropTypes.string,
//     label: PropTypes.string.isRequired,
//     disabled: PropTypes.bool,
//     onClick: PropTypes.func
// };

        

/*<button disabled = {buttonState.previous} onClick={()=>{
    setIndex(index-=1);
    if (buttonState.next) {
        setDisabled((prev) => ({...prev, next: false}))
    }
    if (index<1) {
        setDisabled((prev)=>({...prev, previous: true}))
    }
    }}>&lt;</button>
<button disabled={buttonState.next} onClick={()=>{
setIndex(index +=1)
if(buttonState.previous) {
setDisabled((prev)=>({...prev, previous: false}))
}
if (index>1) {
setDisabled(prev=>({...prev, next: true}))
}
}}>&gt;</button>






    /* <p dangerouslySetInnerHTML={{__html: text}}/>
    <button onClick={()=> console.log('here')}>Обратная связь</button> */
 
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

// Стили для модального окна
const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 200,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

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
