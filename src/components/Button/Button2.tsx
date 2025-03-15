import React, { FC } from 'react';
import './Button2.css';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className="button-form" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
