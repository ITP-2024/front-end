import React from 'react';

interface ButtonProps {
    onClick: () => void;
}

interface ButtonProps {
    buttonText: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
    return (
        <button
            type="submit"
            className="bg-fuchsia-800 text-white px-10 py-2 rounded-md mt-10 hover:bg-fuchsia-900"
            onClick={onClick}
            
        >
            {buttonText}
        </button>
    );
};

export default Button;
