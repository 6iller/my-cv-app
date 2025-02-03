import { v4 as uuidv4 } from 'uuid';
import './Header.css'
import image1 from  '../../assets/logo.png';
import Menu from '../Menu/Menu';
export default function Header () {
    // const MENU = [
    //     {title: 'Home', to: 'Home', key:uuidv4()}, 
    //     {title: 'Services', to: 'Services', key:uuidv4()}, 
    //     {title: 'Portfolio', to: 'portfolio', key:uuidv4()}, 
    //     {title: 'About us', to: 'about us', key:uuidv4()}, 

    // ]
    return (
        <header>
        <div className="logo"><img src={image1} alt="Logo" /></div>
  <Menu></Menu>
        <button className="contact-button">Contact</button> 
        </header>   
    )
};