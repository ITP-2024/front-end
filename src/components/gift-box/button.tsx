import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      type="button"
      className="bg-fuchsia-800 text-white px-10 py-2 rounded-md mt-10 hover:bg-fuchsia-900"
      onClick={onClick} // Ensure onClick is cast to the correct type
    >
      {label}
    </button>
  );
};

export default Button;
