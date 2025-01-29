import PropTypes from 'prop-types'; // ES6
import './button.css'


export default function Button ({label, disabled = false, onClick}) {


    // const text = '<i>Меня зовут Александр и я пробую учиться веб-разработке</i>'
    // const images = [photo_1, photo_2, photo_3];
    return (

        <button disabled={disabled} onClick={onClick}>{label}</button>
        
           
    )};

    Button.PropTypes = {
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        onclick: PropTypes.func
        };
        

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
 
// import React, { useState } from 'react';
// import './Button.css' 

// function Modal({ isOpen, onClose }) {
//     if (!isOpen) return null;

//     return (
//         <div style={modalStyles}>
//             <div style={modalContentStyles}>
//                 <button onClick={onClose} style={closeButtonStyles}>✖️</button>
//                 <h2>Обратная связь</h2>
//                 <form>
//                     <label className="label, "htmlFor="email">Email:</label>
//                     <input id="email" type="email" />
//                     <label htmlFor="phone">Phone:</label>
//                     <input id="phone" type="tel" />
//                     <div><label htmlFor="message">Message:</label>
//                     <textarea id="message"></textarea></div>
//                     <button type="submit">Отправить</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default function Button() {
//     const text = '<i>Меня зовут Александр и я пробую учиться веб-разработке</i>';
//     const [isModalOpen, setModalOpen] = useState(false);

//     const handleOpenModal = () => setModalOpen(true);
//     const handleCloseModal = () => setModalOpen(false);

//     return (
//         <>
//             <p dangerouslySetInnerHTML={{ __html: text }} />
//             <button onClick={handleOpenModal}>Обратная связь</button>
//             <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
//         </>
//     );
// }

// // Стили для модального окна
// const modalStyles = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',

// };

// const modalContentStyles = {
//     backgroundColor: 'black',
//     padding: '20px',
//     borderRadius: '5px',
//     position: 'relative',
    
// };

// const closeButtonStyles = {
//     position: 'absolute',
//     top: '10px',
//     right: '10px',
// };
