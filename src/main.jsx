import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import {useState} from "react";
import Button from './components/Button/Button.jsx';
import Form from "./components/Form/Form.jsx";
import Slider from './components/Slider/Slider.jsx';
import Layout from './components/Layout/Layout.jsx';
import React from 'react';
import ReactDom from 'react-dom/client';

import MainComponent from './components/Main/MainComponent.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Layout>
//       <MainComponent /> {/* Теперь Main отображается как компонент */}
//     </Layout>
//   </React.StrictMode>
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Layout/> */}
  </StrictMode>,
)
