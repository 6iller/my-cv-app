import PropTypes from 'prop-types';


export default function Slide({ image }) {
    return (
        <img src={image} alt="Слайд" />
    );
}

Slide.propTypes = {
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
