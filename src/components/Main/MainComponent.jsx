import {useState} from "react";
import Button from '../Button/Button.jsx';
import Form from "../Form/Form.jsx";
import React from 'react';
import './MainComponent.css';

export default function MainComponent () {
  const [formIsActive, setFormActive] = useState(false);
  return (
    <div className="main-component">
      <div className="main-component__background"></div>
      <div className="main-component__content">
        <p>Меня зовут Гарольд и я пробую учиться веб-разработке</p>
        <div className="feedback"><Button label='обратная связь' onClick={()=>setFormActive(active=>!active)}/> </div>
        {formIsActive && <Form/>}
      </div>
    </div>
  );
};


