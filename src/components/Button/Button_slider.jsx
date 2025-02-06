import PropTypes from 'prop-types';
import './button.css';

export default function Button({className, label, disabled = false, onClick }) {
    return (
        <button className={className} disabled={disabled} onClick={onClick}>{label}</button>

    );
};

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};