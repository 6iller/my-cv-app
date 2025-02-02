import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {useState} from "react";
import Button from './components/Button/Button.jsx';
import Form from "./components/Form/Form.jsx";
import Slider from './components/Slider/Slider.jsx';
import Layout from './components/Layout/Layout.jsx';

export default function Main () {
const [formIsActive, setFormActive] = useState(false)
return (<Layout>
<Button label='обратная связь' onClick={()=>setFormActive(active=>!active)}/>
  <>{formIsActive &&<Form/>}</>
  <Slider/>
</Layout>
)
};


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
