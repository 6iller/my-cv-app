import { useState } from 'react';
import image1 from  '../../assets/hung0.jpg';
import image2 from '../../assets/hung1.jpg';
import image3 from '../../assets/hung2.jpg';
import Button_slider from '../Button/Button_slider.jsx';
import Slide from './Slide';
import React from 'react';

export default function Slider() {
    const [index, setIndex] = useState(0);
    const images = [image1, image2, image3];

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="slider-container">
            <div>
             <Slide key={index} image={images[index]} />    
             </div>
            <div className='button-container'>
                <Button_slider label={'<'} onClick={handlePrev} /> {/* label */}
                <Button_slider label={'>'} onClick={handleNext} /> {/* label */}
                
            </div>
        </div>
    );
}