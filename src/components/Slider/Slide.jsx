import PropTypes from 'prop-types'; // ES6
export default function Slide ({image}) {
    return (
    <img src={image}/>
)
}

Slide.propTypes = {
    image: propTypes.image
}
