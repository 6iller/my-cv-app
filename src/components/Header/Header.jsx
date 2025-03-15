import { v4 as uuidv4 } from 'uuid';
import './Header.css'
import Favicon from  '../../assets/favicon.png';
import Menu from '../Menu/Menu';
import React from 'react';
import { useState } from 'react';
import FormPractice from '../../components/Button/Form.tsx'
import Modal from '../../components/Modal/Modal.tsx'
export default function Header () {
    // const MENU = [
    //     {title: 'Home', to: 'Home', key:uuidv4()}, 
    //     {title: 'Services', to: 'Services', key:uuidv4()}, 
    //     {title: 'Portfolio', to: 'portfolio', key:uuidv4()}, 
    //     {title: 'About us', to: 'about us', key:uuidv4()}, 

    // ]
    const [modalOpen, setModalOpen] = useState(false);

    const handleSignIn = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <header>
        <div className="logo"><img src={Favicon} alt="Logo" /></div>
  <Menu></Menu>
        <button className="contact-button">Contacts</button> 
        <button className='registerButton' onClick={handleSignIn}>
                Sign in
            </button>
            {modalOpen && (
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <FormPractice />
                </Modal>
            )}
        </header>   
    )
};