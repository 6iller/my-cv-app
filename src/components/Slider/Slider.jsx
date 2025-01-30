import { useState } from 'react';
import image1 from  '../../assets/unsplash_1.png';
import image2 from '../../assets/unsplash_2.png';
import image3 from '../../assets/unsplash_3.png';
import Button from '../Button/Button';
import Slide from './Slide';

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
        <div className="gallery-container">
            <div className='button-container'>
                <Slide key={index} image={images[index]} />
                <Button label={'<'} onClick={handlePrev} /> {/* label добавлен */}
                <Button label={'>'} onClick={handleNext} /> {/* label добавлен */}
                
            </div>
        </div>
    );
}

// import { useState } from 'react';
// import photo_1 from '../../assets/unsplash_1.png';
// import photo_2 from '../../assets/unsplash_2.png';
// import photo_3 from '../../assets/unsplash_3.png';
// import Button from '../Button/Button';
// import Slide from './Slide';

// export default function Slider () {
//     let [index, setIndex] = useState(0);
//     let [buttonState, setDisabled] = useState ({prevous: false, next: false});
//     const images = [photo_1, photo_2, photo_3];
//     return (
    
//     <div className="gallery-container">
//         <div className='button-container'>
//             <Slide image = {images[index]}/>
//             <Button label='>' disabled ={buttonState.next} onClick={()=>setIndex(index=>index+=1)}/>
//             <Button label='<' disabled ={buttonState.prevous} onClick={()=>setIndex(index=>index-=1)}/>
//         </div>
//     </div>
//     )
// }


