// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import '../../index.css'
import {useState} from "react";
import Button from '../Button/Button.jsx';
import Form from "../Form/Form.jsx";
import Slider from '../Slider/Slider.jsx';
import Layout from '../Layout/Layout.jsx';
import React from 'react';
import ReactDom from 'react-dom/client';


export default function MainComponent () {
const [formIsActive, setFormActive] = useState(false)
return (<>
<Button label='обратная связь' onClick={()=>setFormActive(active=>!active)}/>
  <>{formIsActive &&<Form/>}</>
  {/* <Slider/> */}
</>
)
};

// у преподавателя layout не рендерится тут, он убран