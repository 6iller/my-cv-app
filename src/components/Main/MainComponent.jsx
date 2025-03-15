import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
import Form from '../Form/Form.jsx';
import './MainComponent.css';

export default function MainComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="main-component">
      <div className="main-component__background"></div>
      <div className="main-component__content">
        <p>Меня зовут Гарольд и я пробую учиться веб-разработке</p>
        <div className="feedback">
          <Button onClick={() => setIsModalOpen(true)} />
        </div>
        {isModalOpen && (
          <div className="modal-overlay">
            <Form onClose={() => setIsModalOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
}


